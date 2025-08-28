import { describe, test, expect } from 'vitest';
import removeElement from './index.js';

describe('27. 移除元素', () => {
    test('示例1: [3,2,2,3], val=3', () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        const result = removeElement(nums, val);
        
        expect(result).toBe(2);
        // 检查前 result 个元素都不等于 val
        for (let i = 0; i < result; i++) {
            expect(nums[i]).not.toBe(val);
        }
        // 检查前 result 个元素包含原数组中所有不等于 val 的元素
        expect(nums.slice(0, result).sort()).toEqual([2, 2]);
    });

    test('示例2: [0,1,2,2,3,0,4,2], val=2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        const result = removeElement(nums, val);
        
        expect(result).toBe(5);
        // 检查前 result 个元素都不等于 val
        for (let i = 0; i < result; i++) {
            expect(nums[i]).not.toBe(val);
        }
        // 检查前 result 个元素包含原数组中所有不等于 val 的元素
        expect(nums.slice(0, result).sort()).toEqual([0, 0, 1, 3, 4]);
    });

    test('边界情况: 空数组', () => {
        const nums = [];
        const val = 0;
        const result = removeElement(nums, val);
        
        expect(result).toBe(0);
    });

    test('边界情况: 所有元素都等于val', () => {
        const nums = [1, 1, 1, 1];
        const val = 1;
        const result = removeElement(nums, val);
        
        expect(result).toBe(0);
    });

    test('边界情况: 没有元素等于val', () => {
        const nums = [1, 2, 3, 4];
        const val = 5;
        const result = removeElement(nums, val);
        
        expect(result).toBe(4);
        expect(nums.slice(0, result)).toEqual([1, 2, 3, 4]);
    });
});
