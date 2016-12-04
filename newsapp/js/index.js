$(function () {
    function reserve(originSize,type) {
        type= type|| "x";
        var html=document.querySelector("html");
        if(type=="x"){
            var cw=document.documentElement.clientWidth;
            html.style.fontSize=cw/originSize*100+"px";
        }else if(type=="y"){
            var ch=document.documentElement.clientHeight;
            html.style.fontSize=ch/originSize*100+"px";
        }
    }
    reserve(1334,"y");
    var swiper = new Swiper('.swiper-container',{});
    /*下拉菜单*/
    var falg=true;
    $(".menu").click(function(){
       if(falg){
           $(this).find(".line1").css({
               transform:"rotate(45deg) translate(0,0.08rem)"
           });
           $(this).find(".line2").css({
               transform:"rotate(-45deg) translate(0,-0.08rem)"
           });
           $(".menu-list a").each(function(index,obj){
               $(".menu-list a").eq(index).css({
                   opacity:"0",
                   animation:"menu 1s forwards "+index*0.2+"s"
               })
           });
           // $(".menu-list").css({display:"block"});
           falg=false;
       }else{
           $(this).find(".line1").css({
               transform:"rotate(0deg) translate(0,0)"
           });
           $(this).find(".line2").css({
               transform:"rotate(0deg) translate(0,0)"
           });
           $(".menu-list a").each(function(index,obj){
               $(".menu-list a").eq(index).css({
                   opacity:1,
                   animation:"menu1 1s forwards "+(1.6-index*0.2)+"s"
               })
           });
           // setTimeout(function(){
           //     $(".menu-list").css({display:"none"})
           // },100);
           falg=true;
       }
    });






















})