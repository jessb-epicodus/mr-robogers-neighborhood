//business logic
function beepBoop(num) {
const userName = $("input#userName").val(); //  UI logic in bus. logic??
  let numArray = [];
    for (let i=0; i <= num; i++) {
      let numString = i.toString();
        if (userName === "") {
          return ("Please complete both fields.");
        } else if (num === "") {
          return (userName + ", please complete both fields.");
        } else if ((i % 100 === 0) && (i !== 0)) {
          numArray.push(" Hello, neighbor!");
        } else if (numString.includes("3")) {
          numArray.push(" Won't you be my neighbor, " + userName + "?");
        } else if(numString.includes("2")) {
          numArray.push(" Boop!");
        } else if (numString.includes("1")) {
          numArray.push(" Beep!");
        } else {
        numArray.push(" " + numString);
        }
    }
    return numArray;
}

//ui logic
$(document).ready(function() {
  $("#mrrob").submit(function(event) {
    event.preventDefault();
    const userNum = $("input#userNumber").val();
    // const userName = $("input#userName").val(); // moved to UI
    $("#result").text(beepBoop(userNum));
    $("#quote").show();
  });
});