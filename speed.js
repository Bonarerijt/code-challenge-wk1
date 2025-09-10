let speed =(prompt('enter your speed')); //prompts the user for an input.
 
getSpeed(speed);        // calls the function

function getSpeed(speed){       //function declaration
if (speed <=70) {   // if the speed is less than or equal 70, the return will be 'OK'.
    return "OK";
}else {
    let demPoints =(speed-70)/5     // calculation serves the purpose of calculating demerit points based on speed of car.
    if(demPoints >12){      // Demerit points are arrived at by dividing the difference between speed and speedlimit and dividing it by kmPerDemeritPoint.
        return "License suspended"; // if demerit points are greater than 12, the message will return, License suspended.
    }
    else{
        return ('Points:' + demPoints)      // gets the demerit points form the speed clculation.
    }
}
}