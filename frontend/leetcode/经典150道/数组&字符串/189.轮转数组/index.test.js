import { describe, test, expect } from 'vitest';
import rotate from './index.js';

describe('189. 轮转数组', () => {
    test('示例1: [1,2,3,4,5,6,7], k=3', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        
        rotate(nums, k);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    test('示例2: [-1,-100,3,99], k=2', () => {
        const nums = [-1, -100, 3, 99];
        const k = 2;
        
        rotate(nums, k);
        expect(nums).toEqual([3, 99, -1, -100]);
    });

    test('边界情况: k=0', () => {
        const nums = [1, 2, 3];
        const original = [...nums];
        
        rotate(nums, 0);
        expect(nums).toEqual(original);
    });

    test('边界情况: k等于数组长度', () => {
        const nums = [1, 2, 3, 4];
        const original = [...nums];
        
        rotate(nums, 4);
        expect(nums).toEqual(original);
    });

    test('边界情况: k大于数组长度', () => {
        const nums = [1, 2, 3];
        
        rotate(nums, 4); // 相当于 k=1
        expect(nums).toEqual([3, 1, 2]);
    });

    test('边界情况: 单个元素', () => {
        const nums = [1];
        
        rotate(nums, 1);
        expect(nums).toEqual([1]);
    });

    test('边界情况: 两个元素', () => {
        const nums = [1, 2];
        
        rotate(nums, 1);
        expect(nums).toEqual([2, 1]);
    });

    test('k为1的情况', () => {
        const nums = [1, 2, 3, 4, 5];
        
        rotate(nums, 1);
        expect(nums).toEqual([5, 1, 2, 3, 4]);
    });
});
