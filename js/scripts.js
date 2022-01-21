// contain 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// contain 2: all digits are replaced (all digits) with "Boop!"
// contain 1: all digits are replaced (all digits) with "Beep!"

//business logic
function beepBoop(num) {
  let numArray = [];
    for (let i=0; i <= num; i++) {
      let numString = i.toString();
        if (numString.includes("3")) {
          numArray.push("Won't you be my neighbor?");
        } 
        else if(numString.includes("2")) {
          numArray.push("Boop!");
        } 
        else if (numString.includes("1")) {
          numArray.push("Beep!");
        } 
        else {
        numArray.push(i)
        }
    }
    return numArray;
}

//ui logic
$(document).ready(function() {
  $("#mrrob").submit(function(event) {
    event.preventDefault();
    const userNum = $("input#userNumber").val();
    $("#result").text(beepBoop(userNum));
   });
});