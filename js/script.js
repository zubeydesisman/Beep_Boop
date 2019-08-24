$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();

    var output = [];
    for (var sayi = 0; sayi<=userInput; sayi++) {
      if (sayi.toString().includes("3")) {
        output.push("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (sayi.toString().includes("2")) {
        output.push("Boop!");
      } else if (sayi.toString().includes("1")) {
        output.push("Beep!");
      } else {
        output.push(sayi);
      }

    }
var lastOutput = output.join(', ');
    $(".lastOutput").text(lastOutput);
      $("#result").show();
    console.log(output);

  });
});
