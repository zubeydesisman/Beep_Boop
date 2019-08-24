$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var numbers = $("input#number").val();
  //  console.log(numbers);
    var splitNumbers = numbers.split();
      //    console.log(splitNumbers);
     var thirt = ["I'm sorry, Dave. I'm afraid I can't do that."]
     var range = [];
     for (var i = 0; i<=numbers; i++)
     range.push(i);
// console.log(range);
     var conditionsNumber = [1,2,3];
     if (range[i] === (conditionsNumber[2])) {
       range[i] = thirt
       console.log(range);
     }
    //var thirt = ["I'm sorry, Dave. I'm afraid I can't do that."]



    //
    // var condition = [1,2,3];
    // for (var i=0; i<condition.length; i++){
    //   for (var j=0; j<lastRange.length; j++) {
    //     if (condition[2] === lastRange[j]) {
    //       lastRange[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
    //     if ( condition[1] === lastRange[j]){
    //        lastRange[j] =  "Boop!"
    //     if ( condition[0] === lastRange[j]) {
    //        lastRange = "Beep!";
    //     }
    //     }
    //       console.log(lastRange);
    //     }
    //   }
    // }
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























  });
});
