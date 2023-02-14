function findLargest(arr) {
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max)
    return max;
}
findLargest([12, 21, 3.6, 9, 12, 8]);
