
jQuery(function() {
  if (!$('body').hasClass('example')) {
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    $('.docs-example').each(function(){
      var html = $(this).html();
      $(this).html('');

      var full_html = '<!DOCTYPE html><html lang="en"><head><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="' + document.location.origin + '/cruk-pattern-library/assets/scss/docs.css"></head><body class="example">' + html + '</body></html>';
      var $iframe = $('<iframe class="cr-pattern-library-code-example" height="100%" />').appendTo($(this));
      //$iframe.src = "javascript:'"+full_html+"'";
      $iframe[0].contentWindow.document.write(full_html);
      $iframe.attr('height', $iframe[0].contentWindow.document.body.scrollHeight + 'px');
    });
  }
});
