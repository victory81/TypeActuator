
$.fn.extend({
	scrollp: function (option) {
		if (!option.parent || !option.list) { throw 'parent or list chu cuo le!' }
		var defaultOption = {
			'time': 1000,
			'num': 3,
			'left': '#left',
			'right': '#right'

		}
		$.extend(true, defaultOption, option);
		// console.log(defaultOption);


		var $width = $(defaultOption.list).innerWidth();
		// console.log($width);
		$(defaultOption.right).on('click', function () {
			$(defaultOption.parent).animate({ marginLeft: -$width * defaultOption.num - 112 }, defaultOption.time, function () {
				$(defaultOption.list).slice(0, defaultOption.num).appendTo($(defaultOption.parent));
				$(defaultOption.parent).css('marginLeft', '0px');
			});
		});
		var judge = true;
		$(defaultOption.left).on('click', function () {
			// console.log(1)
			if (judge) {
				judge = false;
				$(defaultOption.parent).css('marginLeft', -$width * defaultOption.num - 112);
				$(defaultOption.list).slice(-defaultOption.num).prependTo($(defaultOption.parent));
				$(defaultOption.parent).animate({ 'marginLeft': '0px' }, defaultOption.time, function () {
					judge = true;
				});
			}
		});


		// 计时器
		function run() {
			$(defaultOption.parent).animate({ "marginLeft": (-$width - 28) * defaultOption.num }, defaultOption.time, function () {
				$(defaultOption.list).slice(0, defaultOption.num).appendTo($(defaultOption.parent));
				$(defaultOption.parent).css("marginLeft", "0");
			});
		}
		var timer;

		function times() {
			timer = setInterval(function () {
				run();
			}, 3000)
		}
		times()

		// 移出事件
		$(defaultOption.right).on("mouseenter", function () {
			clearInterval(timer);
		})
		$(defaultOption.right).on("mouseleave", function () {
			times();
		})

		$(defaultOption.left).on("mouseenter", function () {
			clearInterval(timer);
		})
		$(defaultOption.left).on("mouseleave", function () {
			times();
		})
		$(defaultOption.parent).on("mouseenter", function () {
			clearInterval(timer);
		})
		$(defaultOption.parent).on("mouseleave", function () {
			times();
		})

	}
})