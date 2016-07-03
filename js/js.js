/*---------next-nav下的选项卡-----------*/
var cont = document.getElementById("cont");               /*cont  oLis  contents   input  form  box1-5*/
var oLis = cont.getElementsByTagName("li");               /*controlTime   timer */
var contents = utils.getByClass(document, "content");
/*--------next-nav下的input----------*/
var input = cont.getElementsByTagName("input")[0];
var form = cont.getElementsByTagName("form")[0];
var box1 = utils.getByClass(cont, "box1")[0];
/*------------------*/
for (var i = 1; i < oLis.length - 2; i++) {
    var oLi = oLis[i];
    var content = contents[i - 1];
    oLi.wuheng = i;
    content.wuheng = i;
    oLi.onmouseover = function () {
        var index = this.wuheng - 1;
        contents[index].style.display = "block";
        contents[index].style.borderTop = "1px solid #e0e0e0";


    };
    oLi.onmouseout = function () {
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.display = "none";
            contents[j].style.borderTop = "none"
        }

    };
    content.onmouseover = function () {
        var index = this.wuheng - 1;
        contents[index].style.display = "block";
        contents[index].style.borderTop = "1px solid #e0e0e0"
    };
    content.onmouseout = function () {
        var index = this.wuheng - 1;
        contents[index].style.display = "none";
        contents[index].style.borderTop = "none"
    }
}
/*--------next-nav下的input----------*/
document.documentElement.onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.tagName.toLowerCase() === "input") {
        form.className = "search";
        box1.style.display = "none"

    } else {
        form.className = "";
        box1.style.display = "block"

    }
};
/*---------轮播图---------------*/

(function () {
    var oDiv = document.getElementById("carousel"),
        fiveBox = oDiv.getElementsByTagName("div")[0],
        aDiv = fiveBox.getElementsByTagName("div"),
        oUl = oDiv.getElementsByTagName("ul")[0],
        oLi = oUl.getElementsByTagName("li"),
        btnLeft = oDiv.getElementsByTagName("a")[0],
        btnRight = oDiv.getElementsByTagName("a")[1];
    var step = 0;
    var interval = 3000;
    var autoTimer = null;
    var animate = utils.animate;
    utils.css(aDiv[0], 'zIndex', 1);
    animate(aDiv[0], {opacity: 1}, 500);
    autoTimer = window.setInterval(autoMove, interval);
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1
        }
        step++;
        setBanner()
    }

    /*-改变div的opacity和z-index-*/
    function setBanner() {
        for (var i = 0; i < aDiv.length; i++) {
            var curDiv = aDiv[i];
            if (i === step) {
                utils.css(curDiv, 'zIndex', 1);
                animate(curDiv, {'opacity': 1}, 600, function () {
                    var siblings = utils.siblings(this);
                    for (var i = 0; i < siblings.length; i++) {
                        utils.css(siblings[i], 'opacity', 0)
                    }
                });
                continue;
            }
            utils.css(curDiv, 'zIndex', 0)
        }
        bannerTip();
    }

    /*-焦点自动切换-*/

    function bannerTip() {
        for (var i = 0; i < oLi.length; i++) {
            var curLi = oLi[i];
            i === step ? utils.addClass(curLi, 'bg') : utils.removeClass(curLi, 'bg')
        }
    }

    /*-鼠标移入停止，移出继续-*/
    stopStart();
    function stopStart() {
        oDiv.onmouseover = function () {
            clearInterval(autoTimer);
        };
        oDiv.onmouseout = function () {
            autoTimer = window.setInterval(autoMove, interval)
        }
    }

    /*-点击焦点，手动切换-*/
    handleChange();
    function handleChange() {
        for (var i = 0; i < oLi.length; i++) {
            var curLi = oLi[i];
            curLi.index = i;
            curLi.onclick = function () {
                step = this.index;
                setBanner();
            }
        }
    }

    /*-左右轮播-*/
    btnRight.onclick = autoMove;
    btnLeft.onclick = function () {
        if (step <= 0) {
            step = aDiv.length;
        }
        step--;
        setBanner();
    };

})();

/*----------定时器-------------*/
function move() {
    var oDiv = document.getElementById("timer"),
        aDiv = oDiv.getElementsByTagName('div')[1],
        btnLeft = aDiv.getElementsByTagName('a')[0],
        btnRight = aDiv.getElementsByTagName('a')[1],
        bottomDiv = oDiv.getElementsByTagName('div')[2],
        oUl = bottomDiv.getElementsByTagName('ul')[0];

    var l = parseFloat(oUl.style.marginLeft);
    if (l >= 0) {
        oUl.style.marginLeft = "-1240px";
        btnLeft.style.background = 'url(img/xuebitu2.png) no-repeat 0 -42px';
        btnRight.style.background = 'url(img/xuebitu2.png) no-repeat -54px 0';
        //btnRight.style.
    }
    if (l < 0) {
        oUl.style.marginLeft = 0;
        btnLeft.style.background = 'url(img/xuebitu2.png) no-repeat 0 0';
        btnRight.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
    }
}
var timer2 = window.setInterval(function () {
    move("timer")
}, 3000);

controlBtn('timer');
controlBtn('box5');
function controlBtn(id) {
    var oDiv = document.getElementById(id),
        aDiv = oDiv.getElementsByTagName('div')[1],
        btnLeft = aDiv.getElementsByTagName('a')[0],
        btnRight = aDiv.getElementsByTagName('a')[1],
        bottomDiv = oDiv.getElementsByTagName('div')[2],
        oUl = bottomDiv.getElementsByTagName('ul')[0];

    btnLeft.onclick = function () {
        var l = parseFloat(oUl.style.marginLeft);

        if (l < 0 && l >= -1240) {
            oUl.style.marginLeft = 0;
            this.style.background = 'url(img/xuebitu2.png) no-repeat 0 0';
            btnRight.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
            return;


        }
        if (l < -1240 && l >= -2480) {
            oUl.style.marginLeft = '-1240px';
            this.style.background = 'url(img/xuebitu2.png) no-repeat 0 -84px';
            btnRight.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
        }

    };

    btnRight.onclick = function () {
        var l = parseFloat(oUl.style.marginLeft);
        if (l >= 0) {
            oUl.style.marginLeft = "-1240px";
            if (id == "timer") {
                btnLeft.style.background = 'url(img/xuebitu2.png) no-repeat 0 -42px';
                this.style.background = 'url(img/xuebitu2.png) no-repeat -54px 0';
                return
            }
            btnLeft.style.background = 'url(img/xuebitu2.png) no-repeat 0 -42px';
            //btnRight.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
        }
        if (l >= -1240 && l < 0) {
            if(id == "timer"){return;}
            oUl.style.marginLeft = "-2480px";
            btnLeft.style.background = 'url(img/xuebitu2.png) no-repeat 0 -42px';
            this.style.background = 'url(img/xuebitu2.png) no-repeat -54px 0';
        }
    };

    btnLeft.onmouseenter = function () {
        window.clearInterval(timer2);
        var l = parseFloat(oUl.style.marginLeft);
        if (l < 0 )
            this.style.background = 'url(img/xuebitu2.png) no-repeat 0 -84px';
    };
    btnRight.onmouseenter = function () {
        window.clearInterval(timer2);
        var l = parseFloat(oUl.style.marginLeft);
        if (l >= 0) {
            this.style.background = 'url(img/xuebitu2.png) no-repeat -54px -84px';
        }
        if (l < 0 && l >= -1240) {
            if (id == "timer"){return;}
            this.style.background = 'url(img/xuebitu2.png) no-repeat -54px -84px';
        }
    };

    btnLeft.onmouseout = function () {
        var l = parseFloat(oUl.style.marginLeft);
        if (l < 0 )
            this.style.background = 'url(img/xuebitu2.png) no-repeat 0 -42px';

    };

    btnRight.onmouseout = function () {
        var l = parseFloat(oUl.style.marginLeft);
        if (l >= 0) {
            this.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
        }
        if (l < 0 && l >= -1240) {
            if (id == "timer"){return;}
            this.style.background = 'url(img/xuebitu2.png) no-repeat -54px -42px';
        }
    };
    aDiv.onmouseleave = function () {
        if (id !== "timer"){return;}
        timer2 = window.setInterval(function () {
            move("timer")
        }, 3000);
    }
}

/*maxBox里边的选项卡*/
tab("box2");
tab("box3");
tab("box4");
function tab(id) {
    var box = document.getElementById(id),
        top1 = box.getElementsByTagName("div")[1],
        oLisa = top1.getElementsByTagName("li"),
        bottom1 = box.getElementsByTagName("div")[2],
        rightBox = bottom1.getElementsByTagName("div")[1],
        oUl = rightBox.getElementsByTagName("ul");
    for (var i = 0; i < oLisa.length; i++) {
        oLisa[i].index = i;
        oLisa[i].onmouseover = function () {
            for (var j = 0; j < oLisa.length; j++) {
                oLisa[j].className = '';
                oUl[j].className = 'two';
            }
            this.className = 'active';
            oUl[this.index].className = '';
        }
    }
}

handleTip("box17");
handleTip("box27");
handleTip("box37");
handleTip("box47");
function handleTip (id) {
    var box7 = document.getElementById(id),
        oUl = box7.getElementsByTagName("ul")[0],
        oDiv = box7.getElementsByTagName("div")[1],
        oSpans = oDiv.getElementsByTagName("span"),
        A = box7.getElementsByTagName("a"),
        btnLeft = A[A.length-2],
        btnRight = A[A.length-1],
        step = 0;

    for (var i = 0; i < oSpans.length; i++) {
        var oSpan = oSpans[i];
        oSpan.wuheng = i;
        oSpan.onmouseover = function () {
            var index = this.wuheng;
            if (this.className == "bg1") {
                return;
            }
        };
        oSpan.onclick = function () {
            var index = this.wuheng;
            for (var j = 0; j < oSpans.length; j++) {
                oSpans[j].className = "";
            }
            this.className = "bg1";


            oUl.style.marginLeft = -296 * index + "px"
        };
    }
    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = 0;
            return;
        }
        for (var j = 0; j < oSpans.length; j++) {
            oSpans[j].className = "";
        }
        oSpans[step].className = "bg1";
        oUl.style.marginLeft = -296 * step + "px"
    };
    btnRight.onclick = function () {
        step++;
        if (step > 3) {
            step = 3;
            return;
        }
        for (var j = 0; j < oSpans.length; j++) {
            oSpans[j].className = "";
        }
        oSpans[step].className = "bg1";
        oUl.style.marginLeft = -296 * step + "px"
    }
}


/*图片延迟加载*/
window.onscroll=delayedLoading;
window.setTimeout(delayedLoading,1000);
function delayedLoading(){
        var aImg=document.getElementsByTagName('img');
        var winBottom=utils.win('scrollTop')+utils.win('clientHeight');
        for(var i=0;i<aImg.length; i++){
            var cur=aImg[i];
            lazyLoad(cur,winBottom)
        }
    };
    function lazyLoad(img,winB){
        if(img.loaded){
            return;
        }
        var curT=utils.offset(img).top+img.offsetHeight;
        if(curT<=winB){
            var realImg=img.getAttribute('realImg');
            var newImg=new Image;
            newImg.src=realImg;
            newImg.onload=function(){
                img.setAttribute('src',realImg);
                img.loaded=true;
            };
            newImg.onerror=function(){
                console.log('图片加载失败');
                img.loaded=true;
            }
        }
    }
















