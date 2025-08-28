import { describe, test, expect } from 'vitest';
import hIndex from './index.js';

describe('274. H 指数', () => {
    test('示例1: [3,0,6,1,5]', () => {
        const citations = [3, 0, 6, 1, 5];
        const result = hIndex(citations);
        
        expect(result).toBe(3);
    });

    test('示例2: [1,3,1]', () => {
        const citations = [1, 3, 1];
        const result = hIndex(citations);
        
        expect(result).toBe(1);
    });

    test('边界情况: 单篇论文', () => {
        const citations = [100];
        const result = hIndex(citations);
        
        expect(result).toBe(1); // 只有1篇论文，h指数最多为1
    });

    test('边界情况: 所有论文引用次数为0', () => {
        const citations = [0, 0, 0];
        const result = hIndex(citations);
        
        expect(result).toBe(0);
    });

    test('边界情况: 所有论文引用次数很高', () => {
        const citations = [10, 10, 10];
        const result = hIndex(citations);
        
        expect(result).toBe(3); // 3篇论文都被引用至少3次
    });

    test('递增序列', () => {
        const citations = [1, 2, 3, 4, 5];
        const result = hIndex(citations);
        
        expect(result).toBe(3); // 至少3篇论文被引用至少3次
    });

    test('递减序列', () => {
        const citations = [5, 4, 3, 2, 1];
        const result = hIndex(citations);
        
        expect(result).toBe(3); // 至少3篇论文被引用至少3次
    });

    test('包含重复值', () => {
        const citations = [4, 4, 0, 0];
        const result = hIndex(citations);
        
        expect(result).toBe(2); // 2篇论文被引用至少2次
    });

    test('大数值情况', () => {
        const citations = [25, 8, 5, 3, 3];
        const result = hIndex(citations);
        
        expect(result).toBe(3);
    });
});
