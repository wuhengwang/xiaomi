function handleTip (id) {
    var box7 = document.getElementById(id),
        oUl = box7.getElementsByTagName("ul")[0],
        oDiv = box7.getElementsByTagName("div")[1],
        oSpans = box7.getElementsByTagName("span"),
        bthLeft = box7.getElementsByTagName("a")[0],
        bthRight = box7.getElementsByTagName("a")[1],
        step = 0;

    for (var i = 0; i < oSpans.length; i++) {
        var oSpan = oSpans[i];
        oSpan.wuheng = i;
        oSpan.onmouseover = function () {
            var index = this.wuheng;
            if (this.className == "bg1") {
                return;
            }
            this.style.backgroundColor = "#ffac13"
        };
        oSpan.onmouseout = function () {
            var index = this.wuheng;
            if (this.className == "bg1") {
                return;
            }
            this.style.borderColor = "#b0b0b0"
        };
        oSpan.onclick = function () {
            var index = this.wuheng;
            for (var j = 0; j < oSpans.length; i++) {
                oSpans[i].className = "";
            }
            this.className = "bg1";

            oUl.style.marginLeft = -296 * index + "px"
        };
    }
    bthLeft.onclick = function () {
        step--;
        if (step < 0) {
            return;
        }
        oUl.style.marginLeft = -296 * step + "px"
    };
    bthLeft.onclick = function () {
        step++;
        if (step > 3) {
            return;
        }
        oUl.style.marginLeft = -296 * step + "px"
    }
}
