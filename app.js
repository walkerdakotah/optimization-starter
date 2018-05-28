
/**
 * @params {string} $name - file name without extension - used to add as class to body
 * @params {string} $variationFile - file name + extension
 * @params {string} $variationPath - path to optimization project directory
 * @params {string} $variation - full path to variation html
 */
console.log('mahalo from optimization.js');
(function ($) {
  var $name = 'v1';
  var $variationFile = $name + '.html'
  var $variationPath = '/wp-content/themes/Sunrise-House/optimization/html/';
  var $variation = $variationPath + $variationFile;

  $('body').addClass($name);
  jQuery.ajax({
    url: $variation,
    dataType: 'html'
  }).done(function (variationHTML) {
    console.log('updated');
    // do jQuery stuff here...
    $('.first-footer-section').replaceWith(variationHTML);
  })

})(jQuery);
