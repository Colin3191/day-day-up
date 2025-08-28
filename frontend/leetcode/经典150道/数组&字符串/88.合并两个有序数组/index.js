/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 逆向双指针
    let i = m - 1; // nums1 有效元素的最后一个位置
    let j = n - 1; // nums2 的最后一个位置
    let k = m + n - 1; // nums1 的最后一个位置
    
    // 从后往前合并
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    // 如果 nums2 还有剩余元素，复制到 nums1 前面
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    
    // 如果 nums1 还有剩余元素，它们已经在正确位置，无需处理
};

export default merge;
