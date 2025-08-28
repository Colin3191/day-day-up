import { describe, it, expect } from 'vitest'
import trap from './index.js'

describe('接雨水', () => {
  it('示例用例', () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
    expect(trap([4,2,0,3,2,5])).toBe(9)
  })

  it('边界与特殊', () => {
    expect(trap([])).toBe(0)
    expect(trap([1])).toBe(0)
    expect(trap([2,2,2])).toBe(0)
  })

  it('严格单调', () => {
    expect(trap([1,2,3,4,5])).toBe(0)
    expect(trap([5,4,3,2,1])).toBe(0)
  })

  it('典型波峰波谷', () => {
    expect(trap([2,0,2])).toBe(2)
    expect(trap([3,0,2,0,4])).toBe(7)
  })
})


