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
    reserve(1334,"y")
    /*音乐控制*/
    var mus=$(".mus")[0];
    var prowidth=$(".progress")[0];
    $(".playbtn").click(function () {
        if(mus.paused){
            mus.play();
            $(".pause").css("display","block");
            $(".play").css("display","none");
            mus.addEventListener("timeupdate",function () {
                if(!isNaN(mus.duration)){
                    var bili=mus.currentTime/mus.duration;
                    console.log(bili);
                    if(bili==1){
                        bili=0;
                    }
                    prowidth.style.width=bili*5.3+"rem";
                }
            });
        }else{
            mus.pause();
            $(".pause").css("display","none");
            $(".play").css("display","block");
        }
    });
    /*歌曲列表*/
    $(".biaodan").click(function () {
        $(".mrlist").css({
            transform:"translate(0,0)",
            transition:"transform .5s linear"
        })
    })






































})