// contain 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// contain 2: all digits are replaced (all digits) with "Boop!"
// contain 1: all digits are replaced (all digits) with "Beep!"

// These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,
// 13 should be replaced with "Won't you be my neighbor?"
// 21 should be replaced with "Boop".
// 32 should be replaced with "Won't you be my neighbor?"

//business logic
function beepBoop(num) {
  let numArray = num.split("")
  for (let i = 0; i < num.length; i++) {
    if (num.includes("3")) {
      replaceAll with "Won't you be my neighbor?";
    } else if (num.includes("2")) {
      replaceAll with "Boop!";
    } else if (num.includes("1")) {
     replaceAll with "Beep!";
    }
  }

//ui logic
$(document).ready(function() {
  $("#mrrob").submit(function(event) {
    event.preventDefault();
    let num = parseInt($(#number).val());
    let result = beepBoop(num);
    $("#result").text.(result);
    $("#result").show();
  });
});