$(function () {
    changeVideo();
    window.onresize = changeVideo;

    $('a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            animateTo($(this.hash));
        }
    });

    if (window.location.hash) animateTo($(window.location.hash));

    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translateY(' + (scrolled * 0.4) + 'px)',
            'opacity': 1 - scrolled / 1000
        });
        $('#hero-img').css('transform', 'translate3d(0, ' + -(scrolled * 0.16) + 'px, 0)');

        var video = $('#hero-vid');
        var filter = $('#filter');
        if (scrolled < window.innerHeight) {
            video.css('visibility', 'visible');
            filter.css('visibility', 'visible');
        } else {
            video.css('visibility', 'hidden');
            filter.css('visibility', 'hidden');
        }
    });

    if (document.referrer.indexOf('https://kyte.travel/app') != 0) {
        $('#footer').css('display', 'block');
        $('#body').css('paddingTop', '80px');
    }
});

function animateTo(target) {
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - 320
        }, 500);
        return false;
    }
}

function changeVideo() {
    var video = $('#video');
    var hero = $('#hero-vid');
    if (window.innerWidth > window.innerHeight) {
        video.attr('src', 'images/video-landscape.mp4');
        hero.attr('poster', 'images/video-landscape.jpg');
        if (960 / 540 > window.innerWidth / window.innerHeight) {
            hero.css('height', '100%');
        } else {
            hero.css('width', '100%');
        }
        $('#filter').css('lineHeight', '192vh');
    } else {
        video.attr('src', 'images/video-portrait.mp4');
        hero.attr('poster', 'images/video-portrait.jpg');
        if (1080 / 608 > window.innerHeight / window.innerWidth) {
            hero.css('width', '100%');
        } else {
            hero.css('height', '100%');
        }
        $('#filter').css('lineHeight', '172vh');
    }
    hero[0].load();
};

(function ($) {
    'use strict';
    var BestApp = {
        init: function () {
            BestApp.MobileMenu();
            BestApp.ScrollSpy();
            BestApp.SmoothScroll();
            BestApp.Parallax();
            BestApp.Hover();
            BestApp.Form();
            BestApp.Scrollup();

            $(window).on('load', function () {
                BestApp.Animated();
            });
        },
        // Add mobile navigation
        MobileMenu: function () {
            $('.nav-menu-toggle').on('click', function () {
                $(this).parent('.nav-menu-button').prev('.nav-menu-links').slideToggle(300, function () {
                    $(window).trigger('resize.px.parallax');
                });
            });
        },

        // Navigation menu scrollspy to anchor section
        ScrollSpy: function () {
            setTimeout(function () {
                $('body').scrollspy({
                    target: '#navigation.scrollspy',
                    offset: 71
                });
            }, 100);
        },

        // Smooth scrolling to anchor section
        SmoothScroll: function () {
            $('a.smooth-scroll').on('click', function (event) {
                var $anchor = $(this);
                var offsetTop = '';

                if (window.Response.band(768)) {
                    offsetTop = parseInt($($anchor.attr('href')).offset().top - 70, 0);
                } else {
                    offsetTop = parseInt($($anchor.attr('href')).offset().top, 0);
                }

                $('html, body').stop().animate({
                    scrollTop: offsetTop
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            });
        },

        // Background with parallax effect
        Parallax: function () {
            $(window).resize(function () {
                setTimeout(function () {
                    $(window).trigger('resize.px.parallax');
                }, 100);
            });
        },

        // Elements hover effect
        Hover: function () {
            $('.affa-tbl-pricing .tbl-prc-wrap').on('hover', function () {
                if (!$(this).parents('.tbl-prc-col').hasClass('current')) {
                    $(this).parents('.affa-tbl-pricing').find('.tbl-prc-col').removeClass('current');
                    $(this).parents('.tbl-prc-col').addClass('current');
                }
            });
        },

        // Form submit function
        Form: function () {
            var pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

            // Checking form input when focus and keypress event
            $('.affa-form-contact input[type="text"], .affa-form-contact input[type="email"], .affa-form-contact textarea').on('focus keypress', function () {
                var $input = $(this);

                if ($input.hasClass('error')) {
                    $input.removeClass('error');
                }
            });

            // Contact form when submit button clicked
            $('.affa-form-contact').on('submit', function () {
                var $form = $(this);
                var submitData = $form.serialize();
                var $name = $form.find('input[name="name"]');
                var $email = $form.find('input[name="email"]');
                var $message = $form.find('textarea[name="message"]');
                var $send_copy = $form.find('input[name="send_copy"]');
                var $submit = $form.find('input[name="submit"]');
                var status = true;

                if ($email.val() === '' || pattern.test($email.val()) === false) {
                    $email.addClass('error');
                    status = false;
                }
                if ($message.val() === '') {
                    $message.addClass('error');
                    status = false;
                }

                if (status) {
                    $name.attr('disabled', 'disabled');
                    $email.attr('disabled', 'disabled');
                    $message.attr('disabled', 'disabled');
                    $send_copy.attr('disabled', 'disabled');
                    $submit.attr('disabled', 'disabled');

                    $.ajax({
                        type: 'POST',
                        url: 'process-contact.php',
                        data: submitData + '&action=add',
                        dataType: 'html',
                        success: function (msg) {
                            if (parseInt(msg, 0) !== 0) {
                                var msg_split = msg.split('|');
                                if (msg_split[0] === 'success') {
                                    $name.val('').removeAttr('disabled');
                                    $email.val('').removeAttr('disabled').removeClass('error');
                                    $message.val('').removeAttr('disabled').removeClass('error');
                                    $send_copy.prop('checked', false).removeAttr('disabled');
                                    $submit.removeAttr('disabled');
                                    $form.find('.submit-status').html('<div class="submit-status-txt"><span class="success"><i class="fa fa-check"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
                                } else {
                                    $name.removeAttr('disabled');
                                    $email.removeAttr('disabled').removeClass('error');
                                    $message.removeAttr('disabled').removeClass('error');
                                    $send_copy.removeAttr('disabled');
                                    $submit.removeAttr('disabled');
                                    $form.find('.submit-status').html('<div class="submit-status-txt"><span class="error"><i class="fa fa-close"></i> ' + msg_split[1] + '</span></div>').fadeIn(300).delay(3000).fadeOut(300);
                                }
                            }
                        }
                    });
                }

                status = true;

                return false;
            });
        },

        // Back to top button function
        Scrollup: function () {
            $('.scrollup').on('click', function () {
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 2000, 'easeInOutExpo');

                return false;
            });
        },

        // Embed animation effects to HTML elements with CSS3
        Animated: function () {
            $('.animation, .animation-visible').each(function () {
                var $element = $(this);
                $element.waypoint(function () {
                    var delay = 0;
                    if ($element.data('delay')) delay = parseInt($element.data('delay'), 0);
                    if (!$element.hasClass('animated')) {
                        setTimeout(function () {
                            $element.addClass('animated ' + $element.data('animation'));
                        }, delay);
                    }
                    delay = 0;
                }, {
                    offset: '85%'
                });
            });
        }

    };

    // Run the main function
    $(function () {
        BestApp.init();
    });

})(window.jQuery);
