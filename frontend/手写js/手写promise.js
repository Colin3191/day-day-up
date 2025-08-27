/**
 * Promise/A+ 规范：
 * 1. 状态：pending → fulfilled/rejected（不可逆）
 * 2. then 方法：
 *    - 必须返回新 Promise
 *    - 回调异步执行（microtask）
 *    - 值穿透（非函数忽略）
 * 3. 解析过程：
 *    - 若返回值 x 为 Promise，则递归解析
 *    - 若 x 为 thenable，尝试调用 then 方法
 *    - 普通值直接 resolve
 */
class MyPromise {
  // 实现代码...
}
