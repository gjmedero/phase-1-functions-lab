// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let block = 42 - someValue;
    if (block >= 0) {
        return block;
    } else {
        return -(block);
    }
}

function distanceFromHqInFeet(someValue) {
   return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
    let distance =(destination -start) * 264;
    return Math.abs(distance);
}

function calculatesFarePrice(start, destination) {
    let distance = (destination - start) * 264;
    distance = Math.abs(distance);

    if (distance < 400) {
        return 0;
    } 
    else if (distance > 400 && distance < 2000) {
       let fare = distance - 400;
        return  Math.abs(fare) * .02;
    }
    else if ( distance > 2000 && distance < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
