$("h1").css("color", "red");

$("button").click(function () {
  $("h1").css("color", "red");
  $("h1").text("LOOK BEHIND YOU!");
});

$("input").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "orange");
});
