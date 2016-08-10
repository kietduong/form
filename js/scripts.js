$(document).ready(function() {
  $("#main_form").submit(function(event) {
    $("#output").text($("#name").val());
    $(".invoice").show();
    event.preventDefault();
    alert("#output");
  var beverage = $("#beverage").val();

  });
});
