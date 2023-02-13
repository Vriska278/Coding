//need a loop to add 2 miles each time the loop runs
let distance;
let speed = 5.5
function runReward(){
    //i started a 2 miles so that candy wouldnt be given at mile 0
    for(distance = 2; speed == 5.5 && distance <= 6; distance += 2)
    //loop stops when distance gets to 6 miles
    //loop knows to stop at 6 because it checks instances of distance that are less than or equal to 6
    //loop increments 2 miles each time from the +=2
    //used variables speed and distance to set parameters measuring miles traveled and checking speed at each of those distance checks
    {
        if(speed >= 5.5) 
        {
        console.log("give a piece of candy");
    }
        else
    {   
            break;
        }
    }
}
runReward();