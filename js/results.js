$(function () {
    var num1 = [888, 666, 780, 999, 1100, 1333, 1699, 2000, 2999, 4704];
    var num2 = [100, 599, 999, 1555, 1669, 2666, 5999, 7666, 8564, 9736];
    var num3 = [200, 345, 843, 999, 2113, 9858, 12132, 14656, 45563, 76645];
    var num4 = [100000, 123456, 234567, 345678, 456789, 567890, 678901, 688888, 888888, 678901];
    var num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];
    var timer = null;
    var timer1 = null;
    var flag = true;
    if (!flag) {
        return false;
    };
    flag = false;
    timer = setInterval(function () {
        $('.mileage').text(fn());
        $('.m').text(fn1());
        $('.calories').text(fn2());
        $('.step').text(fn3());
        $('.rank').text(fn4());
    }, 100);
    timer1 = setTimeout(function () {
        $('.mileage').text(num1[num1.length - 1]);
        $('.m').text(num2[num2.length - 1]);
        $('.calories').html(num3[num3.length - 1]);
        $('.step').html(num4[num4.length - 1]);
        $('.rank').html(num5[num5.length - 1]);
        flag = true;
        clearInterval(timer);
        clearTimeout(timer1)
    }, 1000);

    function fn() {
        var x = parseInt(Math.random() * num1.length);
        var res = num1[x];
        return res;
    };

    function fn1() {
        var y = parseInt(Math.random() * num2.length);
        var res1 = num2[y];
        return res1;
    };

    function fn2() {
        var a = parseInt(Math.random() * num3.length);
        var res2 = num3[a];
        return res2;
    };

    function fn3() {
        var b = parseInt(Math.random() * num4.length);
        var res3 = num4[b];
        return res3;
    };

    function fn4() {
        var c = parseInt(Math.random() * num5.length);
        var res4 = num5[c];
        return res4;
    };


    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("canvas"));
    window.onresize = myChart.resize;
    // 指定图表的配置项和数据
    option = {
        // color: ["#0080ff", "#4cd5ce"],
        tooltip: {
            trigger: "axis"
            // axisPointer: {
            //     type: "cross",
            //     label: {
            //         backgroundColor: "rgb(39,63,74)"
            //     }
            // }
        },
        textStyle: {
            fontSize: 15,
            color: "#fff"
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            show: false,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                    width: 5 //这里是为了突出显示加上的
                }
            },
            // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
            type: "value",
            scale: true,
            max: 2200,
            min: 0,
            splitNumber: 10,
            show: false,
            splitLine: {
                show: false
            }
        },
        series: [{
            data: [120, 400, 1000, 459, 1200, 999, 1600],
            type: "line",
            smooth: true,
            itemStyle: {
                normal: {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(248,100,134,0.9)" // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: "rgba(248,100,134,.5)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(248,100,134,.1)" // 100% 处的颜色
                        }
                    ]), //背景渐变色
                    lineStyle: {
                        // 系列级个性化折线样式
                        width: 3,
                        type: "solid",
                        color: "rgba(248,100,134)"
                    }
                },
                emphasis: {
                    color: "#fff",
                    lineStyle: { // 系列级个性化折线样式
                        width: 5,
                        type: 'dotted',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'green'
                            },
                            {
                                offset: 1,
                                color: 'red'
                            }
                        ])
                    }
                }
            }, //线条样式
            symbolSize: 5, //折线点的大小
            areaStyle: {
                normal: {}
            },
            label: {
                normal: {
                    show: false,
                    position: "top"
                }
            }
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})