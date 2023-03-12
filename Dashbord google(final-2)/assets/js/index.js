$(document).ready(function() {
  $(".drop .option").click(function() {
    var val = $(this).attr("data-value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active1").attr("data-value"),
        options = $(".drop .option").length;
    $drop.find(".option.active1").addClass("mini-hack");
    $drop.toggleClass("visible");
    $drop.removeClass("withBG");
    $(this).css("top");
    $drop.toggleClass("opacity");
    $(".mini-hack").removeClass("mini-hack");
    if ($drop.hasClass("visible")) {
      setTimeout(function() {
        $drop.addClass("withBG");
      }, 400 + options*100); 
    }
    triggerAnimation();
    if (val !== "placeholder" || prevActive === "placeholder") {
      $(".drop .option").removeClass("active1");
      $(this).addClass("active1");
    };
  });
  function triggerAnimation() {
    var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
    $(".drop").css("width", "24em");
    setTimeout(function() {
      $(".drop").css("width", finalWidth + "em");
    }, 400);
  }
});
