import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from './index.js'

describe('无重复字符串的最长子串', () => {
  it('应该返回普通字符串的最长无重复子串长度', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  it('应该正确处理空字符串', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('应该处理所有字符都相同的字符串', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    expect(lengthOfLongestSubstring('aaaaa')).toBe(1)
  })

  it('应该处理包含重复字符的字符串', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3)
    expect(lengthOfLongestSubstring('abba')).toBe(2)
  })

  it('应该处理包含特殊字符的字符串', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1)
    expect(lengthOfLongestSubstring('ab c')).toBe(4)
    expect(lengthOfLongestSubstring('!@#$%')).toBe(5)
  })
})
