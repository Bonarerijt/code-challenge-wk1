let marks = Number(prompt ("enter marks")) //Prompts user to enter his marks. Number() ensures the prompt entered is a number and not a string.

grade(marks) // calls the function

function grade(marks){ // function declaration

if (isNaN(marks)){ //NaN checks if the marks entered is a number or not a number  
    return "invalid input";
}

else if (marks <0 || marks >100) {     // conditional statements to find the grade scored from the marks.
    return "invalid input"; 
}

else if (marks >79){
    return "A";     // function to return the grade
}
else if (marks >60 && marks <= 79) { 
    return "B";
}
else if (marks >49 && marks <= 59) {
    return "C";
}

else if (marks >40 && marks <= 49) {
    return "D";
}
else (marks < 40)
    return "E"

}