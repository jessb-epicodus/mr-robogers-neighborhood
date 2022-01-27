//business logic
function beepBoop(num, name) {
  let numArray = [];
    for (let i=0; i <= num; i++) {
      let numString = i.toString();
        if ((name === "") && (num === "")) {
          return ("Please complete both fields.");
        } else if (name === "") {
          return ("Please enter your name.");
        } else if (num === "") {
          return (name + ", please enter a number.");
        } else if ((i % 100 === 0) && (i !== 0)) {
          numArray.push(" Hello, neighbor!");
        } else if (numString.includes("3")) {
          numArray.push(" Won't you be my neighbor, " + name + "?");
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
    const userName = $("input#userName").val();
    $("#result").text(beepBoop(userNum, userName));
    $("#quote").show();
  });
});