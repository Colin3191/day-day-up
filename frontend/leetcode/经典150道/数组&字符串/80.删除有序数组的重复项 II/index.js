/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n <= 2) return n;
    
    let slow = 2; // 慢指针，从索引2开始（前两个元素一定可以保留）
    
    for (let fast = 2; fast < n; fast++) {
        // 如果当前元素与slow-2位置的元素不同，说明可以保留
        // 这样确保每个元素最多出现2次
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    
    return slow;
};

export default removeDuplicates;
