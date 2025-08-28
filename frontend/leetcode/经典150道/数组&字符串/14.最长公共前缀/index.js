// https://leetcode.cn/problems/longest-common-prefix/description/

// 方法一：纵向扫描
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
};

// 方法二：横向扫描
var longestCommonPrefix2 = function(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};

export { longestCommonPrefix, longestCommonPrefix2 };
