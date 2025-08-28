/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0; // 慢指针，指向结果数组的末尾
    
    for (let fast = 0; fast < nums.length; fast++) {
        // 如果当前元素不等于要移除的值
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    
    return slow;
};

export default removeElement;
