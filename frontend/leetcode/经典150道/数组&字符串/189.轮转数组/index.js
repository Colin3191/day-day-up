/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // 处理 k 大于 n 的情况
    
    if (k === 0) return;
    
    // 方法二：数组翻转
    // 1. 翻转整个数组
    reverse(nums, 0, n - 1);
    // 2. 翻转前 k 个元素
    reverse(nums, 0, k - 1);
    // 3. 翻转后 n-k 个元素
    reverse(nums, k, n - 1);
};

// 辅助函数：翻转数组指定区间
function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// 方法一：使用额外数组
var rotateExtraSpace = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }
};

// 方法三：环状替换
var rotateCyclic = function(nums, k) {
    const n = nums.length;
    k = k % n;
    
    if (k === 0) return;
    
    let count = 0; // 已经移动的元素个数
    let start = 0;
    
    while (count < n) {
        let current = start;
        let prev = nums[start];
        
        do {
            let next = (current + k) % n;
            [nums[next], prev] = [prev, nums[next]];
            current = next;
            count++;
        } while (start !== current);
        
        start++;
    }
};

export default rotate;
