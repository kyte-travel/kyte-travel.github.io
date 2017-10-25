(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item-active",
            img: ".timeline-img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            var height = $(this).height();
            var heightHalf = height >> 1;
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = (height + $(this).offset().top);
                var that = $(this)
                if (i == itemLength - 2 && pos > min + heightHalf) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
                    selectors.item.last().addClass(selectors.activeClass)
                } else if (pos <= max - heightHalf && pos >= min - heightHalf) {
                    selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                    return;
                }
            });
        });
    }
})(jQuery);
$("#timeline-1").timeline();