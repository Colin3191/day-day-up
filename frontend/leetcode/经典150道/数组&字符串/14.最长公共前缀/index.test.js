import { describe, it, expect } from 'vitest'
import { longestCommonPrefix, longestCommonPrefix2 } from './index.js'

describe('最长公共前缀', () => {
  const testCases = [
    {
      input: ["flower","flow","flight"],
      expected: "fl"
    },
    {
      input: ["dog","racecar","car"],
      expected: ""
    },
    {
      input: [""],
      expected: ""
    },
    {
      input: ["a"],
      expected: "a"
    },
    {
      input: ["abc","abc","abc"],
      expected: "abc"
    },
    {
      input: ["abcdefg","abcdef","abcde"],
      expected: "abcde"
    }
  ];

  describe('纵向扫描方法', () => {
    testCases.forEach(({ input, expected }, index) => {
      it(`测试用例 ${index + 1}`, () => {
        expect(longestCommonPrefix(input)).toBe(expected);
      });
    });
  });

  describe('横向扫描方法', () => {
    testCases.forEach(({ input, expected }, index) => {
      it(`测试用例 ${index + 1}`, () => {
        expect(longestCommonPrefix2(input)).toBe(expected);
      });
    });
  });

  it('边界情况', () => {
    expect(longestCommonPrefix([""])).toBe("");
    expect(longestCommonPrefix(["", ""])).toBe("");
    expect(longestCommonPrefix(["a", ""])).toBe("");
  });
})
