import { describe, test, expect } from 'vitest';
import removeDuplicates from './index.js';

describe('26. 删除有序数组中的重复项', () => {
    test('示例1: [1,1,2]', () => {
        const nums = [1, 1, 2];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(2);
        expect(nums.slice(0, result)).toEqual([1, 2]);
    });

    test('示例2: [0,0,1,1,1,2,2,3,3,4]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
    });

    test('边界情况: 单个元素', () => {
        const nums = [1];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(1);
        expect(nums.slice(0, result)).toEqual([1]);
    });

    test('边界情况: 所有元素相同', () => {
        const nums = [1, 1, 1, 1];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(1);
        expect(nums.slice(0, result)).toEqual([1]);
    });

    test('边界情况: 所有元素都不重复', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
    });

    test('负数情况', () => {
        const nums = [-3, -1, 0, 0, 0, 3, 3];
        const result = removeDuplicates(nums);
        
        expect(result).toBe(4);
        expect(nums.slice(0, result)).toEqual([-3, -1, 0, 3]);
    });
});
