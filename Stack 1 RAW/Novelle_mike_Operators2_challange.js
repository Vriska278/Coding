// let numberOfpieces = 12;
// let numberOfPeople = 5;
function howMuchLeftOverCake(numberOfPeople,numberOfpieces)
{
    let leftOvercake = (numberOfpieces % numberOfPeople);
    if(leftOvercake == 0)
    {
        console.log("No leftovers for you!");
    }
    else if(leftOvercake <= 2)
    {
        console.log("You have some leftovers");
    }
    else if(leftOvercake <= 5)
    {
        console.log("You have leftovers to share");
    }
    else if(leftOvercake > 5)
    {
        console.log("Hold another party!");
    }
    console.log(leftOvercake);
}
howMuchLeftOverCake(5,12);
howMuchLeftOverCake(5,20);

