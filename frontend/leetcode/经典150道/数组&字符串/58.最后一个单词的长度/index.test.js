import { describe, test, expect } from 'vitest';
import lengthOfLastWord from './index.js';

describe('58. 最后一个单词的长度', () => {
    test('示例1: "Hello World"', () => {
        const s = "Hello World";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(5);
    });

    test('示例2: "   fly me   to   the moon  "', () => {
        const s = "   fly me   to   the moon  ";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(4);
    });

    test('示例3: "luffy is still joyboy"', () => {
        const s = "luffy is still joyboy";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(6);
    });

    test('边界情况: 单个单词', () => {
        const s = "hello";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(5);
    });

    test('边界情况: 单个单词带空格', () => {
        const s = "  hello  ";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(5);
    });

    test('边界情况: 单个字符', () => {
        const s = "a";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(1);
    });

    test('多个空格分隔', () => {
        const s = "a   b   c";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(1);
    });

    test('长单词情况', () => {
        const s = "Today is a nice day";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(3);
    });

    test('首尾都有空格', () => {
        const s = "  programming  is  fun  ";
        const result = lengthOfLastWord(s);
        
        expect(result).toBe(3);
    });
});
