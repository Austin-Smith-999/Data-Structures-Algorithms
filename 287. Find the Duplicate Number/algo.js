/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort();
    // console.log(nums);
    for(i = 0; i < nums.length; i++)
        {
            if(nums[i] === nums[i-1])
                {
                    return nums[i];
                }
        }

    
    
    
    
    
    
    
    
// Below I tried solving it with 2 pointers but it didn't work at all..
    
    
//     let pointer1 = 0;
//     let pointer2 = nums.length - 1;
//     // console.log("pointer 2 length in index", pointer2);
    
//     for(i = 0; i < nums.length; i++)
//         {
//             // console.log(nums[i], nums[nums.length - 1])
//             console.log(nums[i], nums[(nums.length - 1) - i])
            
//             if(nums[i] === nums[(nums.length - 1) - i])
//                 {
//                     console.log(nums[i], nums[(nums.length - 1) - i], "nums[i] =  nums[(nums.length - 1) - i]");
//                     return nums[i];
//                 }
//             console.log("pointer1AND2", pointer1, pointer2);
//             pointer1++;
//             pointer2--;
            
//             if(nums[pointer1] === nums[pointer2]) {
//                 console.log("pointer 1 = pointer 2")
//             }
            
//         }
    
    
    
    
    
    
    
    
//     Below I solved with a hash map but it wasn't constant extra space
    
    
    // let hashMap = {};
    // for(i = 0; i < nums.length; i++)
    //     {
    //         if(nums[i] in hashMap) {
    //             return nums[i];
    //         } else {
    //             hashMap[nums[i]] = nums[i];
    //         }
    //     }
};
