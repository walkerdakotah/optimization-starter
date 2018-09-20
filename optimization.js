(function ($) {

  var $facility = ''
  var $name = 'v1';
  var $variationFile = $name + '.html'
  var $variationPath = '/wp-content/themes/' + $facility + '/optimization/html/';
  var $variation = $variationPath + $variationFile;

  $('body').addClass($name);
  jQuery.ajax({
    url: $variation,
    dataType: 'html'
  }).done(function (variationHTML) {
    console.log('variation updated');
    $('').replaceWith(variationHTML);
  })

})(jQuery);