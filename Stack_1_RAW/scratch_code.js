var number = 1;
var letters = ["A", "B", "C", "D", "E"]
function compute(){
    for(var i = 0; i < letters.length; i++){
        if(i == 1){
            number = number + number * number
            return number + letters[i]
        }
    }
    return number + letters[i]
}
var answer = compute();
console.log(answer);