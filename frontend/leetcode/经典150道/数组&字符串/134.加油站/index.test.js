import { describe, it, expect } from 'vitest'
import { canCompleteCircuit } from './index.js'

describe('加油站', () => {
  it('示例用例', () => {
    expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toBe(3)
    expect(canCompleteCircuit([2,3,4], [3,4,3])).toBe(-1)
  })

  it('单个站点和全相等', () => {
    expect(canCompleteCircuit([1], [1])).toBe(0)
    expect(canCompleteCircuit([2,2,2], [2,2,2])).toBe(0)
  })

  it('起点在中间', () => {
    expect(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1])).toBe(4)
  })
})


