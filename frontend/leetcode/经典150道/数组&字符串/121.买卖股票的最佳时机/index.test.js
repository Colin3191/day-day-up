import { describe, test, expect } from 'vitest';
import maxProfit from './index.js';

describe('121. 买卖股票的最佳时机', () => {
    test('示例1: [7,1,5,3,6,4]', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        
        expect(result).toBe(5); // 在价格1买入，价格6卖出
    });

    test('示例2: [7,6,4,3,1]', () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格一直下跌，无法获得利润
    });

    test('边界情况: 单个价格', () => {
        const prices = [1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 只有一天，无法交易
    });

    test('边界情况: 价格先跌后涨', () => {
        const prices = [2, 4, 1, 5];
        const result = maxProfit(prices);
        
        expect(result).toBe(4); // 在价格1买入，价格5卖出
    });

    test('边界情况: 价格单调递增', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        
        expect(result).toBe(4); // 第一天买入，最后一天卖出
    });

    test('边界情况: 价格单调递减', () => {
        const prices = [5, 4, 3, 2, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格一直下跌，无法获得利润
    });

    test('价格相同的情况', () => {
        const prices = [1, 1, 1, 1];
        const result = maxProfit(prices);
        
        expect(result).toBe(0); // 价格不变，无利润
    });

    test('复杂情况', () => {
        const prices = [3, 2, 6, 5, 0, 3];
        const result = maxProfit(prices);
        
        expect(result).toBe(4); // 在价格2买入，价格6卖出
    });
});
