import { describe, it, expect } from 'vitest'
import { romanToInt } from './index.js'

describe('罗马数字转整数', () => {
  it('示例用例', () => {
    expect(romanToInt("III")).toBe(3)
    expect(romanToInt("LVIII")).toBe(58)
    expect(romanToInt("MCMXC")).toBe(1990)
  })

  it('特殊减法规则', () => {
    expect(romanToInt("IV")).toBe(4)
    expect(romanToInt("IX")).toBe(9)
    expect(romanToInt("XL")).toBe(40)
    expect(romanToInt("XC")).toBe(90)
    expect(romanToInt("CD")).toBe(400)
    expect(romanToInt("CM")).toBe(900)
  })

  it('单个字符', () => {
    expect(romanToInt("I")).toBe(1)
    expect(romanToInt("V")).toBe(5)
    expect(romanToInt("X")).toBe(10)
    expect(romanToInt("L")).toBe(50)
    expect(romanToInt("C")).toBe(100)
    expect(romanToInt("D")).toBe(500)
    expect(romanToInt("M")).toBe(1000)
  })

  it('复杂组合', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994)
    expect(romanToInt("MMMCMXCIX")).toBe(3999)
    expect(romanToInt("XXVII")).toBe(27)
    expect(romanToInt("CDXLIV")).toBe(444)
  })
})
