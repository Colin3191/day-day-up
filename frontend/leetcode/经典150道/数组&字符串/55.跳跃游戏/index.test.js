import { describe, test, expect } from 'vitest';
import canJump from './index.js';

describe('55. 跳跃游戏', () => {
    test('示例1: [2,3,1,1,4]', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = canJump(nums);
        
        expect(result).toBe(true);
    });

    test('示例2: [3,2,1,0,4]', () => {
        const nums = [3, 2, 1, 0, 4];
        const result = canJump(nums);
        
        expect(result).toBe(false);
    });

    test('边界情况: 单个元素', () => {
        const nums = [0];
        const result = canJump(nums);
        
        expect(result).toBe(true); // 已经在最后一个位置
    });

    test('边界情况: 第一个元素为0', () => {
        const nums = [0, 1];
        const result = canJump(nums);
        
        expect(result).toBe(false); // 无法从第一个位置移动
    });

    test('能够到达的情况: 刚好到达', () => {
        const nums = [1, 1, 1, 1];
        const result = canJump(nums);
        
        expect(result).toBe(true); // 每次跳1步
    });

    test('能够到达的情况: 超出范围', () => {
        const nums = [2, 0, 0];
        const result = canJump(nums);
        
        expect(result).toBe(true); // 第一步直接跳到最后
    });

    test('无法到达的情况: 中间有0阻挡', () => {
        const nums = [1, 0, 1, 0];
        const result = canJump(nums);
        
        expect(result).toBe(false); // 被第二个0阻挡
    });

    test('复杂情况: 多个路径', () => {
        const nums = [2, 3, 1, 1, 4];
        const result = canJump(nums);
        
        expect(result).toBe(true);
    });

    test('大跳跃情况', () => {
        const nums = [5, 4, 3, 2, 1, 0];
        const result = canJump(nums);
        
        expect(result).toBe(true); // 第一步可以直接跳到最后
    });
});
