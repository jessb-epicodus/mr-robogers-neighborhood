// contain 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// contain 2: all digits are replaced (all digits) with "Boop!"
// contain 1: all digits are replaced (all digits) with "Beep!"

//business logic
function beepBoop(num) {
  let numArray = [];
    for (let i=0; i <= num; i++) {
      let numString = i.toString();
  } return numArray;
}

//ui logic
$(document).ready(function() {
  $("#mrrob").submit(function(event) {
    event.preventDefault();
    const userNum = $("input#number").val();
    let result = beepBoop(userNum);
    $("#result").text(result);
  });
});