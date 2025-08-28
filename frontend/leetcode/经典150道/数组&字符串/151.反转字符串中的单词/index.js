/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 方法一：使用内置函数
    return s.trim()
        .split(/\s+/) // 使用正则表达式分割多个空格
        .reverse()
        .join(' ');
};

// 方法二：双指针
var reverseWordsManual = function(s) {
    const result = [];
    let i = s.length - 1;
    
    while (i >= 0) {
        // 跳过空格
        while (i >= 0 && s[i] === ' ') {
            i--;
        }
        
        if (i < 0) break;
        
        // 找到单词的结束位置
        let end = i;
        
        // 找到单词的开始位置
        while (i >= 0 && s[i] !== ' ') {
            i--;
        }
        
        // 提取单词
        result.push(s.substring(i + 1, end + 1));
    }
    
    return result.join(' ');
};

// 方法三：原地解法（如果字符串可变）
var reverseWordsInPlace = function(s) {
    // 将字符串转换为字符数组（模拟可变字符串）
    const chars = s.split('');
    
    // 1. 反转整个字符串
    reverse(chars, 0, chars.length - 1);
    
    // 2. 反转每个单词
    let start = 0;
    for (let i = 0; i <= chars.length; i++) {
        if (i === chars.length || chars[i] === ' ') {
            reverse(chars, start, i - 1);
            start = i + 1;
        }
    }
    
    // 3. 清理多余空格
    return cleanSpaces(chars);
};

function reverse(chars, left, right) {
    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }
}

function cleanSpaces(chars) {
    let i = 0, j = 0;
    
    while (j < chars.length) {
        // 跳过空格
        while (j < chars.length && chars[j] === ' ') j++;
        
        // 复制单词
        while (j < chars.length && chars[j] !== ' ') {
            chars[i++] = chars[j++];
        }
        
        // 添加单个空格（如果不是最后一个单词）
        while (j < chars.length && chars[j] === ' ') j++;
        if (j < chars.length) chars[i++] = ' ';
    }
    
    return chars.slice(0, i).join('');
}

export default reverseWords;
