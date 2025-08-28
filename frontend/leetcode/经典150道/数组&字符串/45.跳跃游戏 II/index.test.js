import { describe, test, expect } from 'vitest';
import jump from './index.js';

describe('45. 跳跃游戏 II', () => {
    test('示例1: [2,3,1,1,4]', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = jump(nums);
        
        expect(result).toBe(2); // 0->1->4
    });

    test('示例2: [2,3,0,1,4]', () => {
        const nums = [2, 3, 0, 1, 4];
        const result = jump(nums);
        
        expect(result).toBe(2); // 0->1->4
    });

    test('边界情况: 单个元素', () => {
        const nums = [0];
        const result = jump(nums);
        
        expect(result).toBe(0); // 已经在目标位置
    });

    test('边界情况: 两个元素', () => {
        const nums = [1, 2];
        const result = jump(nums);
        
        expect(result).toBe(1); // 一步到达
    });

    test('一步到达的情况', () => {
        const nums = [5, 1, 1, 1, 1];
        const result = jump(nums);
        
        expect(result).toBe(1); // 第一步直接跳到最后
    });

    test('每次只能跳一步', () => {
        const nums = [1, 1, 1, 1];
        const result = jump(nums);
        
        expect(result).toBe(3); // 需要3次跳跃
    });

    test('复杂情况', () => {
        const nums = [1, 2, 1, 1, 1];
        const result = jump(nums);
        
        expect(result).toBe(3); // 0->1->3->4
    });

    test('大跳跃混合小跳跃', () => {
        const nums = [3, 1, 1, 1, 1];
        const result = jump(nums);
        
        expect(result).toBe(2); // 0->3->4 或 0->1->4
    });

    test('最优路径选择', () => {
        const nums = [2, 1, 2, 1, 4];
        const result = jump(nums);
        
        expect(result).toBe(2); // 0->2->4
    });
});
