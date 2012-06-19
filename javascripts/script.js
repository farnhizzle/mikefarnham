/* Author:

*/
$(document).ready(function() {
  $("#logo")
    .css("left", "-170px")
    .animate({
      left: ".7em"
    }, 700);
    
// flickr photo feed

                $.getJSON("http://api.flickr.com/services/feeds/photoset.gne?set=72157630060194861&nsid=33007040@N02&lang=en-us&format=json&jsoncallback=?",
  function(data) {
    $.each(data.items, function(i,item){
      item.media.m
      
      // backgroundr
      $('body').css({'background-image': item[Math.floor(Math.random() * item.length)] });
    })
  });
});