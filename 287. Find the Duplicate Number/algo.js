/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let hashMap = {};
    for(i = 0; i < nums.length; i++)
        {
            if(nums[i] in hashMap) {
                return nums[i];
            } else {
                hashMap[nums[i]] = nums[i];
            }
        }
};