// contain 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// contain 2: all digits are replaced (all digits) with "Boop!"
// contain 1: all digits are replaced (all digits) with "Beep!"

//business logic
function beepBoop(num)
  let array = []
  for (let i = 0; i < num.length; i++) {


//ui logic
$(document).ready(function() {
  $("#mrrob").submit(function(event) {
    event.preventDefault();
    const num = $("input#number").val());
    let result = beepBoop(num);
    $("#result").text.(result);
    $("#result").show();
  });
});