import { describe, test, expect } from 'vitest';
import productExceptSelf from './index.js';

describe('238. 除自身以外数组的乘积', () => {
    test('示例1: [1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([24, 12, 8, 6]);
    });

    test('示例2: [-1,1,0,-3,3]', () => {
        const nums = [-1, 1, 0, -3, 3];
        const result = productExceptSelf(nums);
        
        // 使用更宽松的比较来处理 -0 和 +0 的差异
        expect(result.length).toBe(5);
        expect(Math.abs(result[0])).toBe(0);
        expect(Math.abs(result[1])).toBe(0);
        expect(result[2]).toBe(9);
        expect(Math.abs(result[3])).toBe(0);
        expect(Math.abs(result[4])).toBe(0);
    });

    test('边界情况: 两个元素', () => {
        const nums = [2, 3];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([3, 2]);
    });

    test('包含1的情况', () => {
        const nums = [1, 1, 1, 1];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([1, 1, 1, 1]);
    });

    test('包含负数', () => {
        const nums = [-1, -2, 3, 4];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([-24, -12, 8, 6]);
    });

    test('包含0的情况: 单个0', () => {
        const nums = [1, 2, 0, 4];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([0, 0, 8, 0]);
    });

    test('包含0的情况: 多个0', () => {
        const nums = [0, 0, 2, 3];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([0, 0, 0, 0]);
    });

    test('大数值情况', () => {
        const nums = [2, 3, 4, 5];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([60, 40, 30, 24]);
    });

    test('包含正负数混合', () => {
        const nums = [2, -3, 4, -5];
        const result = productExceptSelf(nums);
        
        expect(result).toEqual([60, -40, 30, -24]);
    });
});
