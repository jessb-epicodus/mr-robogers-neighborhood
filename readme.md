# _Mr. Roboger's Neighborhood_

#### By _**Jessica Baker**_ 

#### _Mr. Roboger's Neighborhood_



## Description

This application is created to take a number from the user and return a range of numbers from 0 to the users inputted number with the following substitutions made within the returned range:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
The number 13 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Technologies Used

* GIT
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

## Setup/Installation Requirements

* Go to _https://github.com/jessb-epicodus/mr-robogers-neighborhood.git_
* Cone this repository to your desktop (or other desired location)
* Navigate to the top level of the directory called -mr-robogers-neighborhood_
* Open the index.html file in your browser
* _This has not yet been published._

## Tests & Expected Outcomes

* Describe: numArray
Test/objective:  Should use for loop & create string from 0 and to increase by 1 until it reaches the users number input.
Code: 
    let numArray = [];
    for (let i=0; i <= num; i++) 
User input: 5
Expected outcome: 0, 1, 2, 3, 4, 5

* Describe: beepBoob()
Test/objective:  Should use if conditional statement to push "Won't you be my neighbor?" in place of any number in the string containing "3"
Code: ...
    if (numString.includes("3")) {
      numArray.push("Won't you be my neighbor?");
    }
User Input: 5
Expected outcome: 1, 2, Won't you be my neighbor?, 4, 5

Test/objective:  Should use if conditional statement to push "Boop!" in place of any number in the string containing "2"
Code: ...
    } else if(numString.includes("2")) {
      numArray.push("Boop!");
    }
User Input: 23
Expected outcome: 1, Boop!, Won't you be my neighbor?, 4... 22,  Won't you be my neighbor?

Test/objective:  Should replace any number containing 1 with "Beep!" & will not overwrite where also conatining 3 or 2.
Code: ...
    } else if (numString.includes("1")) {
      numArray.push("Beep!");
    }
User Input: 13
Expected outcome: Beep!, Boop!, Won't you be my neighbor?, 4...9, Beep!, Beep!, Boop!, Won't you be my neighbor?

Test/objective:  Should replace any number divisible by 7 with "Hello, neighbor!" & will overwrite where also conatining 1, 2 or 3.
Code: ...
    } else if (i % 100 === 0) {
      numArray.push("Hello, neigbhor!");
    }
User Input: 100
Expected outcome: Beep!, Boop!, Won't you be my neighbor?, 4...99, Hello, neighbor!

## Known Bugs

* No known issues

## License

Copyright (c) _Jan 2022_ _Jessica Baker_