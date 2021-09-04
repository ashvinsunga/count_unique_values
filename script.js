// THE GOAL OF THIS FUNCTION
// Accepts sorted array and counts the unique values in the array

// 1st Solution
// function countUniqueValue(nums){
//     let collection = {};
//     var count = 0;
//     // If num don't exist on the collection, add 1 to the count and add it to collection
//     for (let num of nums){
//     if (collection[num]){
//         collection[num]++;
//     }else{
//         collection[num] = 1
//         count++;
//         }
//     }
//     return count;
// }


//2nd Solution
function countUniqueValue(nums){
    var i = 0;
    for (var j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}                                 
console.log(countUniqueValue([1,3,3,4,4,4,7,7,12,12,13]));
