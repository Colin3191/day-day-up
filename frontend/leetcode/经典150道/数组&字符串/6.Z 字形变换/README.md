## 6. Z 字形变换 (Zigzag Conversion)

题目链接：`https://leetcode.cn/problems/zigzag-conversion/`

将一个给定字符串 `s` 根据给定的行数 `numRows` ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"PAYPALISHIRING"` 行数为 `3` 时，排列如下：

```
P   A   H   R
A P L S I I G
Y   I   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

`string convert(string s, int numRows)`

示例 1：

输入：`s = "PAYPALISHIRING"`, `numRows = 3`
输出：`"PAHNAPLSIIGYIR"`

示例 2：

输入：`s = "PAYPALISHIRING"`, `numRows = 4`
输出：`"PINALSIGYAHRPI"`

解释：
```
P     I    N
A   L S  I G
Y A   H R
P     I
```

示例 3：

输入：`s = "A"`, `numRows = 1`
输出：`"A"`

提示：

- `1 <= s.length <= 1000`
- `s` 由英文字母（小写和大写）、`','` 和 `'.'` 组成
- `1 <= numRows <= 1000`

思路提示：

**方法一：按行排序**
- 创建 `numRows` 个字符串数组，分别对应每一行
- 遍历字符串，根据当前位置计算应该放在哪一行
- 使用方向变量控制是向下还是向上移动
- 最后将所有行的字符串连接起来

**方法二：按访问顺序直接构造**
- 观察规律：第一行和最后一行的字符间隔为 `2 * (numRows - 1)`
- 中间行的字符有两种间隔模式

时间复杂度：`O(n)`；空间复杂度：`O(n)`。
