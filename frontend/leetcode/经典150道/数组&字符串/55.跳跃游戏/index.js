/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0; // 当前能够到达的最远位置
    
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置超出了能够到达的最远位置，返回 false
        if (i > maxReach) {
            return false;
        }
        
        // 更新能够到达的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 如果能够到达最后一个位置，返回 true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return maxReach >= nums.length - 1;
};

export default canJump;
