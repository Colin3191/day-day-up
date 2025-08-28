import { describe, test, expect } from 'vitest';
import removeDuplicates from './index.js';

describe('80. 删除有序数组的重复项 II', () => {
    test('示例1: [1,1,1,2,2,3]', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([1, 1, 2, 2, 3]);
    });

    test('示例2: [0,0,1,1,1,1,2,3,3]', () => {
        const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(7);
        expect(nums.slice(0, result)).toEqual([0, 0, 1, 1, 2, 3, 3]);
    });

    test('边界情况: 长度小于等于2', () => {
        const nums1 = [1];
        expect(removeDuplicates(nums1)).toBe(1);
        expect(nums1.slice(0, 1)).toEqual([1]);
        
        const nums2 = [1, 2];
        expect(removeDuplicates(nums2)).toBe(2);
        expect(nums2.slice(0, 2)).toEqual([1, 2]);
    });

    test('边界情况: 所有元素相同', () => {
        const nums = [1, 1, 1, 1, 1];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(2);
        expect(nums.slice(0, result)).toEqual([1, 1]);
    });

    test('边界情况: 所有元素都不重复', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
    });

    test('混合情况', () => {
        const nums = [1, 1, 1, 2, 2, 2, 3, 3];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(6);
        expect(nums.slice(0, result)).toEqual([1, 1, 2, 2, 3, 3]);
    });
});
