# _Mr. Roboger's Neighborhood_

#### By _**Jessica Baker**_ 

#### _Mr. Roboger's Neighborhood_

## Technologies Used

* GIT
* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

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

## Setup/Installation Requirements

* Go to _https://github.com/jessb-epicodus/mr-robogers-neighborhood.git_
* Cone this repository to your desktop (or other desired location)
* Navigate to the top level of the directory called _mr-robogers-neighborhood_
* Open the index.html file in your browser
* _This has not yet been published._

## Tests & Expected Outcomes

* Describe: Array
Test/objective:  Array should create string to length of number input.
Code: 
    for (let i = 0; i < num.length; i++) {
      ;
    }
Expected outcome: 

* Describe: beepBoob()
Test/objective:  Function should replace any number containing 3 with "Won't you be my neighbor?"
Code: 
Expected outcome: 

Test/objective:  Function should replace any number containing 2 with "Boop?" & will not overwrite where also conatining 3.
Code: 
Expected outcome: 

Test/objective:  Function should replace any number containing 1 with "Beep!?" & will not overwrite where also conatining 3 or 2.
Code: 
Expected outcome: 

## Known Bugs

* No known issues

## License

Copyright (c) _Jan 2022_ _Jessica Baker_