/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    
    // 第一遍：计算左侧乘积
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // 第二遍：计算右侧乘积并更新结果
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }
    
    return answer;
};

// 方法一：使用左右乘积数组（空间复杂度更高，但思路更清晰）
var productExceptSelfTwoArrays = function(nums) {
    const n = nums.length;
    const left = new Array(n);
    const right = new Array(n);
    const answer = new Array(n);
    
    // 计算左侧乘积
    left[0] = 1;
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    
    // 计算右侧乘积
    right[n - 1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    
    // 计算结果
    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    
    return answer;
};

export default productExceptSelf;
