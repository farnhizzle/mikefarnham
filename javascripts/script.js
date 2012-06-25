/* Author:

*/
$(document).ready(function() {
  $("#logo")
    .css("left", "-170px")
    .animate({
      left: ".7em"
    }, 700);
    
  $("#workLinks")
    .css("left", "-200px")
    .delay(250)
    .animate({
      left: "0"
    }, 700);
    
  // $("#logo").hover(function() {
  //   $(this).animate({
  //     left: "+=1em"
  //   }, 250);
  // }, function() {
  //   $(this).animate({
  //     left: "-=1em"
  //   }, 250)
  // });
    
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