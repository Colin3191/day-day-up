import { describe, test, expect } from 'vitest';
import merge from './index.js';

describe('88. 合并两个有序数组', () => {
    test('示例1: [1,2,3,0,0,0], m=3, [2,5,6], n=3', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;
        
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('示例2: [1], m=1, [], n=0', () => {
        const nums1 = [1];
        const m = 1;
        const nums2 = [];
        const n = 0;
        
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('示例3: [0], m=0, [1], n=1', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;
        
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('边界情况: nums1全部小于nums2', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [4, 5, 6];
        const n = 3;
        
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('边界情况: nums1全部大于nums2', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const m = 3;
        const nums2 = [1, 2, 3];
        const n = 3;
        
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
