import { describe, it, expect } from 'vitest'
import { intToRoman } from './index.js'

describe('整数转罗马数字', () => {
  it('示例用例', () => {
    expect(intToRoman(3)).toBe("III")
    expect(intToRoman(58)).toBe("LVIII")
    expect(intToRoman(1994)).toBe("MCMXCIV")
  })

  it('特殊减法规则', () => {
    expect(intToRoman(4)).toBe("IV")
    expect(intToRoman(9)).toBe("IX")
    expect(intToRoman(40)).toBe("XL")
    expect(intToRoman(90)).toBe("XC")
    expect(intToRoman(400)).toBe("CD")
    expect(intToRoman(900)).toBe("CM")
  })

  it('边界值', () => {
    expect(intToRoman(1)).toBe("I")
    expect(intToRoman(3999)).toBe("MMMCMXCIX")
  })

  it('组合情况', () => {
    expect(intToRoman(27)).toBe("XXVII")
    expect(intToRoman(444)).toBe("CDXLIV")
    expect(intToRoman(1776)).toBe("MDCCLXXVI")
  })
})

