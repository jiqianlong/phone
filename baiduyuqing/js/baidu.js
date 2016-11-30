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
       $(".dong").each(function (index,obj) {
           if (num==0){
               // $(".left").eq(index).css({
               //     transform:"translate(0,0)",
               //     opacity:0
               // })
               // $(".right").eq(index).css({
               //     transform:"translate(0,0)",
               //     opacity:0
               // })
               return ;
           }
           if(num!=0){
               if (index==num){
                   $(".left").eq(index).css({
                       transform:"translate(0,0)",
                       opacity:0
                   })
                   $(".right").eq(index).css({
                       transform:"translate(0,0)",
                       opacity:0
                   })
               }else{
                   $(".left").eq(index).css({
                       transform:"translate(50px,0)",
                       opacity:1
                   })
                   $(".right").eq(index).css({
                       transform:"translate(-50px,0)",
                       opacity:1
                   })
               }
           }
       })
    })
    //菜单控制
    var falg1=true;
    $(".menu").click(function () {
        if(falg1){
            $(this).find(".menu-tline").css({
                transform:"translate(0,4px) rotate(45deg)"
            })
            $(this).find(".menu-bline").css({
                transform:"translate(0,-4px) rotate(-45deg)"
            })
            $(".dh-min a").each(function(index,obj){
                $(obj).css({
                    opacity:0,animation:"menu 1s ease forwards "+index*0.2+"s"
                })
            })
            $(".dh-min").css({display:"block"})
            falg1=false;
        }else{
            $(this).find(".menu-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(this).find(".menu-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".dh-min a").each(function(index,obj){
                $(obj).css({
                    opacity:1,animation:"menu1 1s ease forwards "+(1.2-index*0.2)+"s",
                })
            })
            falg1=true;
            setTimeout(function () {
                $(".dh-min").css({display:"none"})
            },1700)
        }
    })
    $(window).resize(function () {
        var w=$(window).width();
        h=$(window).height();
        $(".box").css({
            marginTop:-num*h,
            transition:"margin-top 1s ease"
        })
        if(w>1000){
            $(".dh-min a").css({
                animation:"none",
                opacity:0
            })
            $(".menu-tline,.menu-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            falg1=true;
        }
    })













})