$(document).ready(function() {
  'use strict';
  // Content Page
  if (
    $('body')
      .find('section')
      .hasClass('slice_content_page')
  ) {
    // code to try and make content images work on mobile phones. Set max-width css property is if has not already been set.
    // If width and height attributes are both set, then the image is compressed horizontally, but that is still better than it overflowing.
    $('body')
      .find('section.slice_content_page div.ArticleBody img')
      .each(function() {
        var Img = $(this);
        if (Img.css('max-width') === 'none') {
          Img.css('max-width', '100%');
        }
      });
  }
  // Corrections for various hardware/browsers
  var P = navigator.platform;
  var bSmallAppleDevice = P === 'iPhone' || P === 'iPad' || P === 'iPod';
  if (bSmallAppleDevice) {
    // Parallex images are often a mess on small apple devices, so add a tag onto the <body> tag so we can take evasive action.
    $('body').addClass('OnSmallAppleDevice');
  }
});
