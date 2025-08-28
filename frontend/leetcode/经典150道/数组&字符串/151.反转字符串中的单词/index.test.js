import { describe, test, expect } from 'vitest';
import reverseWords from './index.js';

describe('151. 反转字符串中的单词', () => {
    test('示例1: "the sky is blue"', () => {
        const s = "the sky is blue";
        const result = reverseWords(s);
        
        expect(result).toBe("blue is sky the");
    });

    test('示例2: "  hello world  "', () => {
        const s = "  hello world  ";
        const result = reverseWords(s);
        
        expect(result).toBe("world hello");
    });

    test('示例3: "a good   example"', () => {
        const s = "a good   example";
        const result = reverseWords(s);
        
        expect(result).toBe("example good a");
    });

    test('边界情况: 单个单词', () => {
        const s = "hello";
        const result = reverseWords(s);
        
        expect(result).toBe("hello");
    });

    test('边界情况: 单个单词带空格', () => {
        const s = "  hello  ";
        const result = reverseWords(s);
        
        expect(result).toBe("hello");
    });

    test('边界情况: 两个单词', () => {
        const s = "hello world";
        const result = reverseWords(s);
        
        expect(result).toBe("world hello");
    });

    test('多个空格分隔', () => {
        const s = "a   b   c";
        const result = reverseWords(s);
        
        expect(result).toBe("c b a");
    });

    test('首尾都有多个空格', () => {
        const s = "   programming   is   fun   ";
        const result = reverseWords(s);
        
        expect(result).toBe("fun is programming");
    });

    test('包含数字和字母', () => {
        const s = "hello 123 world 456";
        const result = reverseWords(s);
        
        expect(result).toBe("456 world 123 hello");
    });

    test('单个字符单词', () => {
        const s = "a b c d";
        const result = reverseWords(s);
        
        expect(result).toBe("d c b a");
    });
});
