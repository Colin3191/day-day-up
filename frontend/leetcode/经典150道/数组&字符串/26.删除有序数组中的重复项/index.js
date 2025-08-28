/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0; // 慢指针，指向不重复元素的末尾
    
    for (let fast = 1; fast < nums.length; fast++) {
        // 如果找到了不重复的元素
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1; // 长度 = 索引 + 1
};

export default removeDuplicates;
