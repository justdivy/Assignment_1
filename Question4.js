function largestDiff(arr){
    if(!Array.isArray(arr) || arr.length < 2){
        return null;
    }
    let min = arr[0];
    let maxDiff = 0;

    for(let i = 1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }else{
            maxDiff = Math.max(maxDiff, arr[i]-min);
        }
    }
    return maxDiff;
}
console.log(largestDiff([4,3,10,2]));

