/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-07-18 18:52:42
 * @version $Id$
 */
$(function() {
    var _this;
    var main = {
        expiringTime: null,
        currentTime: null,
        crushState: true,
        crushTimes: 3,
        setTimeLeave: "July 18,2017 23:38:59",
        timeDiff: 0,
        predictNum: 1059,
        audio: null,
        init: function() {
            _this = this;
            _this.predictFn();
            $(".rule").tap(function() {
                _this.layer("#myPrize");
            });
            $(".layer-close").tap(function() {
                $(this).parents('.layer').removeClass('active');
                $('html').removeClass('noscroll');
                $(".egg-box").removeClass('disabled');
                _this.audio.load();
            });
            var swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                onInit: function(swiper) {
                    $('.swiper-slide-active').find('.effect').addClass('css3');
                },
                onSlideChangeStart: function(swiper) {
                    $('.swiper-slide').find('.effect').removeClass('css3');
                    $('.swiper-slide-active').find('.effect').addClass('css3');
                }
            });
            $('[data-ride="numberGrow"]').each(function() {
                new NumberGrow(this);
            });
            _this.timeDiffFn();
            if (_this.timeDiff >= 0) {
                _this.countdown();
                $(".egg-box").tap(function() {
                    $("#tipText").html("还没到时间砸蛋哦！")
                    _this.layer("#tip");
                });
            } else {
                $("#crushTimes").html(_this.crushTimes);
                $(".egg").click(function() {
                    var el = $(this);
                    var elCuizi = el.next(".sinker");
                    _this.audio = document.getElementById('sound');
                    if (!_this.crushState) {
                        return;
                    };
                    if (!el.data("on")) {
                        $("#tipText").html("已砸过了！亲~")
                        _this.layer("#tip");
                        return;
                    } else {
                        $(".egg-box").addClass('disabled');
                        elCuizi.addClass('active');
                        _this.audio.play();
                        if (_this.crushTimes === 0) {
                            _$("#tipText").html("还没有砸蛋机会哦~")
                            _this.layer("#tip");
                            return;

                        } else {
                            _this.crushTimes--;
                        };
                    };
                    _this.crushState = false;

                    elCuizi[0].addEventListener("webkitAnimationEnd", function() {
                        el.addClass('active');
                        var This = this;
                        setTimeout(function() {
                            This.style.display = "none";
                            _this.layer("#prize");

                            $("#crushTimes").html(_this.crushTimes);
                        }, 1500);
                        el.data("on", "false");
                        _this.crushState = true;

                    }, false);

                });



            };
        },
        predictFn: function() {
            var num = 0;
            var numTimer = null;
            numTimer = setInterval(function() {
                _this.predictNum++;
                var numHtml = [];
                numHtml.push("<p>已有</p>");
                var numStr = _this.formatNum(_this.predictNum) + "";
                numStr.split("").forEach(function(item) {
                    numHtml.push("<span>" + item + "</span>");
                });
                numHtml.push("<p>人预言</p>");
                $("#predict").html(numHtml.join(''));
            }, 1000)
        },
        countdown: function() {
            var timer = null;
            timer = setInterval(function() {
                _this.timeDiffFn();
                if (_this.timeDiff >= 0) {
                    var hour = (Math.floor(_this.timeDiff / 86400) * 24 + Math.floor(_this.timeDiff % 86400 / 3600)) + "";
                    var minute = (Math.floor(_this.timeDiff % 86400 % 3600 / 60)) + "";
                    var second = (_this.timeDiff % 60) + "";
                    var html = [];
                    html.push("<div>");
                    html.push("<p>还剩</p>");
                    _this.setTimeHtml(hour, html);
                    html.push("<i>:</i>");
                    _this.setTimeHtml(minute, html);
                    html.push("<i>:</i>");
                    _this.setTimeHtml(second, html);
                    html.push("<p>开砸</p>");
                    html.push("</div>");
                    $('#time').html(html.join(''));
                } else {
                    clearInterval(timer);
                }
            }, 1000);
        },
        timeDiffFn: function() {
            _this.currentTime = new Date();
            _this.expiringTime = new Date(_this.setTimeLeave);
            _this.timeDiff = Math.floor((_this.expiringTime - _this.currentTime) / 1000);
        },
        setTimeHtml: function(time, html) {
            time.split("").forEach(function(item) {
                if (time < 10) {
                    html.push('<span>0</span>');
                    html.push('<span>' + item + '</span>');
                } else {
                    html.push('<span>' + item + '</span>');
                };

            });
        },
        layer: function(obj) {
            $(obj).addClass('active');
            var elLayer = $(obj)
            $.smartScroll(elLayer, ".scrollable");
            $('html').addClass('noscroll');
        },
        formatNum: function(n) {
            var b = parseInt(n).toString();
            var len = b.length;
            if (len <= 3)="" {="" return="" b;="" }="" var="" r="len" %="" 3;=""> 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
        }
    }
    main.init()

})
</=>