
function greetSomeone(person, time)
{
    if(person == "Count Dooku")
    {
        console.log("i'm coming for you, Dooku!")
    }
    else if(time == "Afternoon")
    {
        console.log("Good, " + time + " " + person)
    }
    else if(time == "Morning")
    {
        console.log("Good, " + time + " " + person)
    }
    else if(time == "Evening")
    {
        console.log("good, " + time + " " + person)
    }
}
greetSomeone("Anakin", "Evening");
greetSomeone("Count Dooku");