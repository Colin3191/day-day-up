import { describe, test, expect } from 'vitest';
import fullJustify from './index.js';

describe('68. 文本左右对齐', () => {
    test('示例1', () => {
        const words = ["This", "is", "an", "example", "of", "text", "justification."];
        const maxWidth = 16;
        const expected = [
            "This    is    an",
            "example  of text",
            "justification.  "
        ];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('示例2', () => {
        const words = ["What","must","be","acknowledgment","shall","be"];
        const maxWidth = 16;
        const expected = [
            "What   must   be",
            "acknowledgment  ",
            "shall be        "
        ];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('示例3', () => {
        const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
        const maxWidth = 20;
        const expected = [
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  "
        ];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('单个单词', () => {
        const words = ["Hello"];
        const maxWidth = 10;
        const expected = ["Hello     "];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('每行只有一个单词', () => {
        const words = ["Hello", "World"];
        const maxWidth = 5;
        const expected = ["Hello", "World"];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('两个单词的行', () => {
        const words = ["a", "b", "end"];
        const maxWidth = 5;
        const expected = ["a   b", "end  "];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('空格分配不均匀的情况', () => {
        const words = ["a", "b", "c", "end"];
        const maxWidth = 7;
        const expected = ["a  b  c", "end    "];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('最后一行左对齐', () => {
        const words = ["ask", "not", "what", "your", "country"];
        const maxWidth = 16;
        const expected = [
            "ask   not   what",
            "your country    "
        ];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });

    test('验证每行长度都等于maxWidth', () => {
        const words = ["This", "is", "an", "example", "of", "text", "justification."];
        const maxWidth = 16;
        const result = fullJustify(words, maxWidth);
        
        result.forEach(line => {
            expect(line.length).toBe(maxWidth);
        });
    });

    test('单词长度等于maxWidth', () => {
        const words = ["justification"];
        const maxWidth = 13;
        const expected = ["justification"];
        expect(fullJustify(words, maxWidth)).toEqual(expected);
    });
});
