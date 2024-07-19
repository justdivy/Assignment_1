const nums = [10, 2, 5, 8, 9];
function findSecondHighest(arr){
    if(arr.length<2){
        return null;
    }
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a,b)=>b-a);
    return uniqueArr[1]
}
console.log(findSecondHighest(nums));