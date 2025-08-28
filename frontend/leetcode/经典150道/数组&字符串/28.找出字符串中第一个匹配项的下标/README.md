## 28. 找出字符串中第一个匹配项的下标 (Find the Index of the First Occurrence in a String)

题目链接：`https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/`

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串的第一个匹配项的下标（下标从 0 开始）。如果 `needle` 不是 `haystack` 的子字符串，则返回 `-1` 。

示例 1：

输入：`haystack = "sadbutsad"`, `needle = "sad"`

输出：`0`

解释："sad" 在下标 0 和 6 处匹配。第一个匹配项的下标是 0 ，所以返回 0 。

示例 2：

输入：`haystack = "leetcode"`, `needle = "leeto"`

输出：`-1`

解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。

提示：

- `1 <= haystack.length, needle.length <= 10^4`
- `haystack` 和 `needle` 仅由小写英文字符组成

思路提示：

**方法一：暴力匹配**
- 遍历 `haystack`，对于每个位置，检查是否能匹配 `needle`

**方法二：KMP算法**
- 预处理 `needle` 构建部分匹配表（失效函数）
- 使用部分匹配表进行高效匹配，避免重复比较

**方法三：使用内置函数**
- 直接使用 `indexOf()` 方法

时间复杂度：`O(nm)`（暴力）或 `O(n+m)`（KMP）；空间复杂度：`O(1)` 或 `O(m)`。
