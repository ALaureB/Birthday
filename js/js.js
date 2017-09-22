$("#item2, #item3, #item4, #alexis").hide();

$("#item1").on("click", function () {
  $("#item2").show();
  });

$("#item2").on("click", function () {
  $("#item3").show();
  });

$("#item3").on("click", function () {
  $("#item4").show();
  });

$("#item4").on("click", function () {
  $("#alexis").show();
  $("#son")[0].play();
  });