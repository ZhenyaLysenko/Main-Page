$(".button").click(function () {
  if ( $( ".nav-wrapper" ).is( ":hidden" ) ) {
    $( ".nav-wrapper" ).slideDown( "fast" );
  } else {
    $( ".nav-wrapper" ).slideUp("fast");
  }
});
