/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Boyer-Moore 投票算法
    let candidate = nums[0];
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
};

// 方法二：哈希表计数
var majorityElementHashMap = function(nums) {
    const map = new Map();
    const n = nums.length;
    
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > Math.floor(n / 2)) {
            return num;
        }
    }
};

// 方法三：排序
var majorityElementSort = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

export default majorityElement;
