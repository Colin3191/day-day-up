import { describe, it, expect } from 'vitest'
import { candy } from './index.js'

describe('分发糖果', () => {
  it('示例用例', () => {
    expect(candy([1,0,2])).toBe(5)
    expect(candy([1,2,2])).toBe(4)
  })

  it('单个或全部相等', () => {
    expect(candy([1])).toBe(1)
    expect(candy([2,2,2])).toBe(3)
  })

  it('严格递增', () => {
    expect(candy([1,2,3,4])).toBe(10)
  })

  it('严格递减', () => {
    expect(candy([4,3,2,1])).toBe(10)
  })

  it('波峰波谷', () => {
    expect(candy([1,3,2,2,1])).toBe(7)
    expect(candy([1,3,4,5,2])).toBe(11)
  })
})


