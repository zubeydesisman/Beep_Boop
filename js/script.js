$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    var firstSpec = [...Array(numbers).keys()];
   console.log(firstSpec);



















  });
});
