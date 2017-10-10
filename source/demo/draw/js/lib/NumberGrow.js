function NumberGrow(element, options) {
    options = options || {};

    var $this = $(element),
        time = options.time || $this.data('time'),//总时间
        num = options.num || $this.data('value'),//要显示的真实数值
        step = num * 16 / (time * 1000),//每16ms增加的数值
        start = 0,//计数器
        interval,//定时器
        old = 0;

    //每帧不能超过16ms，所以理想的interval间隔为16ms
    //step为每16ms增加的数值

    interval = setInterval(function () {
        start = start + step;
        if (start >= num) {
            clearInterval(interval);
            interval = undefined;
            start = num;
        }

        var t = Math.floor(start);

        //t未发生改变的话就直接返回
        //避免调用text函数，提高DOM性能
        if (t == old) {
            return;
        }

        old = t;
        $this.text(old);
    }, 16);
}
