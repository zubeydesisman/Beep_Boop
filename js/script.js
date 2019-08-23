$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var numbers = parseInt($("input#number").val());
    var range = [...Array(numbers).keys()];
     //console.log(range);
    var three = [3];
    for (var i=0; i<three.length; i++){
      for (var j=0; j<range.length; j++) {
      if (three[i] === range[j]) {
      range = "I'm sorry, Dave. I'm afraid I can't do that.";
}
        }
    }


 console.log(range);















  });
});
