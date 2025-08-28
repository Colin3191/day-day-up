import { describe, test, expect } from 'vitest';
import majorityElement from './index.js';

describe('169. 多数元素', () => {
    test('示例1: [3,2,3]', () => {
        const nums = [3, 2, 3];
        const result = majorityElement(nums);
        
        expect(result).toBe(3);
    });

    test('示例2: [2,2,1,1,1,2,2]', () => {
        const nums = [2, 2, 1, 1, 1, 2, 2];
        const result = majorityElement(nums);
        
        expect(result).toBe(2);
    });

    test('边界情况: 单个元素', () => {
        const nums = [1];
        const result = majorityElement(nums);
        
        expect(result).toBe(1);
    });

    test('边界情况: 两个相同元素', () => {
        const nums = [1, 1];
        const result = majorityElement(nums);
        
        expect(result).toBe(1);
    });

    test('边界情况: 所有元素相同', () => {
        const nums = [5, 5, 5, 5, 5];
        const result = majorityElement(nums);
        
        expect(result).toBe(5);
    });

    test('负数情况', () => {
        const nums = [-1, -1, -1, 2, 2];
        const result = majorityElement(nums);
        
        expect(result).toBe(-1);
    });

    test('大数组情况', () => {
        const nums = [1, 2, 3, 1, 1, 1, 1];
        const result = majorityElement(nums);
        
        expect(result).toBe(1);
    });
});
