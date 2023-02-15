var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

    function positiveArray(numbers){
        for(var i=0; i<numbers.length; i++)
            if(numbers[i]>0){
                countPositives += 1
            }
        return countPositives
    }
positiveArray(numbers)
console.log("there are " + countPositives + " positive values");
