import { describe, test, expect } from 'vitest';
import RandomizedSet from './index.js';

describe('380. O(1) 时间插入、删除和获取随机元素', () => {
    test('示例操作序列', () => {
        const randomizedSet = new RandomizedSet();
        
        // 插入1，应该返回true
        expect(randomizedSet.insert(1)).toBe(true);
        
        // 删除2，不存在，应该返回false
        expect(randomizedSet.remove(2)).toBe(false);
        
        // 插入2，应该返回true
        expect(randomizedSet.insert(2)).toBe(true);
        
        // 获取随机元素，应该是1或2
        const random1 = randomizedSet.getRandom();
        expect([1, 2]).toContain(random1);
        
        // 删除1，应该返回true
        expect(randomizedSet.remove(1)).toBe(true);
        
        // 再次插入2，已存在，应该返回false
        expect(randomizedSet.insert(2)).toBe(false);
        
        // 获取随机元素，现在只有2
        expect(randomizedSet.getRandom()).toBe(2);
    });

    test('基本插入和删除', () => {
        const randomizedSet = new RandomizedSet();
        
        // 插入多个不同元素
        expect(randomizedSet.insert(1)).toBe(true);
        expect(randomizedSet.insert(2)).toBe(true);
        expect(randomizedSet.insert(3)).toBe(true);
        
        // 重复插入相同元素
        expect(randomizedSet.insert(1)).toBe(false);
        expect(randomizedSet.insert(2)).toBe(false);
        
        // 删除存在的元素
        expect(randomizedSet.remove(2)).toBe(true);
        
        // 删除不存在的元素
        expect(randomizedSet.remove(4)).toBe(false);
        
        // 再次删除已删除的元素
        expect(randomizedSet.remove(2)).toBe(false);
    });

    test('getRandom分布测试', () => {
        const randomizedSet = new RandomizedSet();
        const elements = [1, 2, 3, 4, 5];
        
        // 插入多个元素
        elements.forEach(el => randomizedSet.insert(el));
        
        // 多次调用getRandom，检查返回值都在预期范围内
        const results = new Set();
        for (let i = 0; i < 50; i++) {
            const random = randomizedSet.getRandom();
            expect(elements).toContain(random);
            results.add(random);
        }
        
        // 在足够多的调用中，应该能获取到大部分元素（概率性测试）
        expect(results.size).toBeGreaterThan(1);
    });

    test('边界情况：单个元素', () => {
        const randomizedSet = new RandomizedSet();
        
        expect(randomizedSet.insert(42)).toBe(true);
        expect(randomizedSet.getRandom()).toBe(42);
        expect(randomizedSet.remove(42)).toBe(true);
        expect(randomizedSet.insert(42)).toBe(true);
        expect(randomizedSet.getRandom()).toBe(42);
    });

    test('删除后重新插入', () => {
        const randomizedSet = new RandomizedSet();
        
        // 插入元素
        expect(randomizedSet.insert(1)).toBe(true);
        expect(randomizedSet.insert(2)).toBe(true);
        expect(randomizedSet.insert(3)).toBe(true);
        
        // 删除中间元素
        expect(randomizedSet.remove(2)).toBe(true);
        
        // 重新插入
        expect(randomizedSet.insert(2)).toBe(true);
        
        // 验证所有元素都存在
        const possibleValues = [1, 2, 3];
        for (let i = 0; i < 10; i++) {
            expect(possibleValues).toContain(randomizedSet.getRandom());
        }
    });
});
