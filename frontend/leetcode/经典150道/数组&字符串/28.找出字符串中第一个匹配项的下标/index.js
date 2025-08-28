/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 方法一：暴力匹配
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;
        }
    }
    
    return -1;
};

// 方法二：KMP算法
var strStrKMP = function(haystack, needle) {
    if (needle.length === 0) return 0;
    
    // 构建部分匹配表（失效函数）
    const lps = buildLPS(needle);
    
    let i = 0; // haystack的指针
    let j = 0; // needle的指针
    
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }
        
        if (j === needle.length) {
            return i - j; // 找到匹配
        } else if (i < haystack.length && haystack[i] !== needle[j]) {
            if (j !== 0) {
                j = lps[j - 1]; // 使用部分匹配表
            } else {
                i++;
            }
        }
    }
    
    return -1;
};

// 构建KMP算法的部分匹配表
function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // 前缀长度
    let i = 1;
    
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

// 方法三：使用内置函数
var strStrBuiltIn = function(haystack, needle) {
    return haystack.indexOf(needle);
};

export default strStr;
