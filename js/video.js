$(document).ready(function () {
  scaleVideoContainer();
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function () {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
});

function scaleVideoContainer() {
  var height = Math.min($(window).height(), 1080);
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
  $(element).each(function () {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
  var windowWidth = $('.homepage-hero-module').width(),
    windowHeight = $('.homepage-hero-module').height(),
    videoWidth,
    videoHeight;

  $(element).each(function () {
    var videoAspectRatio = $(this).data('height') / $(this).data('width');
    $(this).width(windowWidth);
    videoHeight = windowHeight;
    videoWidth = videoHeight / videoAspectRatio;
    $(this).css({
      'margin-top': 0,
      'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
    });
    $(this).width(videoWidth).height(videoHeight);
    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  });
}
