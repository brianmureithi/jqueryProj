$(document).ready(function() {
        
    /* Handle swipe */
    let  panel = $('#my-panel').panel();
    $("#content").on("swiperight", function() {
      panel.panel("open");
    });

$("#content").on("swipeleft", function() {
panel.panel("close");
});
/* Toggle menu button */
$(document).on("click", "#menuButton", function() {
   panel.panel("toggle");
  });


});

