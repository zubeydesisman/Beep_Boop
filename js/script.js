$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    var array = [...Array(numbers).keys()];
    var range = array + "," + numbers

    console.log(range);






//    var three = [3];
//  for (var i=0; i<three.length; i++){
//      for (var j=0; j<range.length; j++) {
//        if (three[i] === range[j]) {
//          range = "I'm sorry, Dave. I'm afraid I can't do that.";
//      }
//      }
//    }
//    var two = [2];
//    for (var t=0; t<two.length; t++) {
//      for (var j=0; j<range.length; j++) {
//        if (two[t] === range[j]) {
//          range = "Boop!";
//        }
//      }
//    }
//    var one = [1];
//    for (var k=0; k<two.length; k++) {
//      for (var j=0; j<range.length; j++) {
//        if (one[k] === range[j]) {
//          range = "Beep!";
//        }
//      }
//    }







    console.log(range);















  });
});
