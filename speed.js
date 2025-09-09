let speed =(prompt('enter your speed')); //prompts the user an input.
 
getSpeed(speed);        // calls the function

function getSpeed(speed){       //function declaration
if (speed <=70) {
    return "OK";
}else {
    let demPoints =(speed-70)/5     // calculation serves the purpose of calculating demerit points based on speed of car.
    if(demPoints >12){
        return "License suspended";
    }
    else{
        return ('Points:' + demPoints)      // gets the demerit points form the speed clculation.
    }
}
}