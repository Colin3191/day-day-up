import { describe, test, expect } from 'vitest';
import maxProfit from './index.js';

describe('122. 买卖股票的最佳时机 II', () => {
    test('示例1: [7,1,5,3,6,4]', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        
        expect(result).toBe(7); // (5-1) + (6-3) = 4 + 3 = 7
    });

    test('示例2: [1,2,3,4,5]', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        
        expect(result).toBe(4); // 每天都有利润：1+1+1+1 = 4，或者 5-1 = 4
    });

    test('示例3: [7,6,4,3,1]', () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格一直下跌，无法获得利润
    });

    test('边界情况: 单个价格', () => {
        const prices = [1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 只有一天，无法交易
    });

    test('边界情况: 两个价格上涨', () => {
        const prices = [1, 2];
        const result = maxProfit(prices);
        
        expect(result).toBe(1); // 第一天买入，第二天卖出
    });

    test('边界情况: 两个价格下跌', () => {
        const prices = [2, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格下跌，不交易
    });

    test('价格相同的情况', () => {
        const prices = [1, 1, 1, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格不变，无利润
    });

    test('复杂波动情况', () => {
        const prices = [2, 1, 4, 9, 5, 7, 3];
        const result = maxProfit(prices);
        
        // (4-1) + (9-4) + (7-5) = 3 + 5 + 2 = 10
        expect(result).toBe(10);
    });

    test('先跌后涨的情况', () => {
        const prices = [3, 2, 1, 4, 5];
        const result = maxProfit(prices);
        
        // (4-1) + (5-4) = 3 + 1 = 4
        expect(result).toBe(4);
    });
});
