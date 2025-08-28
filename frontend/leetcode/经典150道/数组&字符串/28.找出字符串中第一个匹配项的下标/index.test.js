import { describe, test, expect } from 'vitest';
import strStr from './index.js';

describe('28. 找出字符串中第一个匹配项的下标', () => {
    test('示例1: haystack="sadbutsad", needle="sad"', () => {
        const haystack = "sadbutsad";
        const needle = "sad";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(0);
    });

    test('示例2: haystack="leetcode", needle="leeto"', () => {
        const haystack = "leetcode";
        const needle = "leeto";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(-1);
    });

    test('边界情况: needle为空字符串', () => {
        const haystack = "hello";
        const needle = "";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(0);
    });

    test('边界情况: needle长度大于haystack', () => {
        const haystack = "a";
        const needle = "aa";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(-1);
    });

    test('边界情况: haystack和needle相等', () => {
        const haystack = "hello";
        const needle = "hello";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(0);
    });

    test('needle在末尾', () => {
        const haystack = "hello world";
        const needle = "world";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(6);
    });

    test('needle在中间', () => {
        const haystack = "hello world test";
        const needle = "world";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(6);
    });

    test('重复字符情况', () => {
        const haystack = "aaaaaaa";
        const needle = "aaa";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(0);
    });

    test('部分匹配后失败', () => {
        const haystack = "abcabcabcabc";
        const needle = "abcabc";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(0);
    });

    test('单字符匹配', () => {
        const haystack = "abc";
        const needle = "c";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(2);
    });

    test('不存在的单字符', () => {
        const haystack = "abc";
        const needle = "d";
        const result = strStr(haystack, needle);
        
        expect(result).toBe(-1);
    });
});
