/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 方法一：从后往前遍历
    let i = s.length - 1;
    
    // 跳过末尾的空格
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    // 计算最后一个单词的长度
    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
};

// 方法二：使用内置函数
var lengthOfLastWordBuiltIn = function(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};

// 方法三：正则表达式
var lengthOfLastWordRegex = function(s) {
    const match = s.trim().match(/\w+$/);
    return match ? match[0].length : 0;
};

export default lengthOfLastWord;
