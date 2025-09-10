let marks = Number(prompt ("enter marks")) //Prompts user to enter his marks. Number() ensures the prompt entered is a number and not a string.

grade(marks) // calls the function

function grade(marks){ // function declaration

if (isNaN(marks)){ //NaN checks if the marks entered is a number or not a number  
    return "invalid input";
}

// conditional statements to find the grade scored from the marks.
else if (marks <0 || marks >100) {  
    return "invalid input"; 
}

else if (marks >79){    // if the marks is greater than 70, it returns 'A'.
    return "A";       
}
else if (marks >60 && marks <= 79) {   // if the marks falls between 60 and 79(79 included), it returns 'B'.
    return "B";
}
else if (marks >49 && marks <= 59) {    // if the marks falls between 49 and 59(59 included), it returns 'C'.
    return "C";
}

else if (marks >40 && marks <= 49) {    // if the marks falls between 40 and 49(49 included), it returns 'D'.
    return "D";
}
else (marks < 40)   // if marks is less than 40, it returns 'E'.
    return "E"

}