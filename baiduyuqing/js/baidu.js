/**
 * Created by Administrator on 2016/11/29.
 */
$(function () {
    var num=0;
    var falg=true;
    var h=$(window).height();
    $(".box").mousedown(function (e) {
        e.preventDefault();
    })
    $(".box").mousemove(function (e) {
        e.preventDefault();
    })
    touch.on("body","swipeup",".box",function () {
        if (!falg){
            return ;
        }
        num++;
        if (num==$("section").length){
            num=$("section").length-1;
            return ;
        }
        $(".box").css({
            marginTop:-num*h,
            transition:"margin-top 1s ease"
        })
        $(".lunbo li").css({
            background:"none"
        })
        $(".lunbo li").eq(num).css({
            background:"#333"
        })
        falg=false;
    })
    touch.on("body","swipedown",".box",function () {
        if (!falg){
            return ;
        }
        num--;
        if (num==-1){
            num=0;
            return ;
        }
        $(".box").css({
            marginTop:-num*h,
            transition:"margin-top 1s ease"
        })
        $(".lunbo li").css({
            background:"none"
        })
        $(".lunbo li").eq(num).css({
            background:"#333"
        })
        falg=false;
    })
    //检测动画是否完成
    $(".box")[0].addEventListener("webkitTransitionEnd",function () {
        falg=true;
    })












})