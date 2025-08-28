/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let i = 0;
    
    while (i < words.length) {
        // 贪心地选择当前行能放下的单词
        let currentLine = [words[i]];
        let currentLength = words[i].length;
        i++;
        
        // 尽可能多地添加单词到当前行
        while (i < words.length && currentLength + 1 + words[i].length <= maxWidth) {
            currentLine.push(words[i]);
            currentLength += 1 + words[i].length; // +1 是单词间的基本空格
            i++;
        }
        
        // 判断是否是最后一行
        const isLastLine = (i === words.length);
        
        if (isLastLine) {
            // 最后一行：左对齐
            result.push(leftJustify(currentLine, maxWidth));
        } else {
            // 非最后一行：两端对齐
            result.push(justify(currentLine, maxWidth));
        }
    }
    
    return result;
};

/**
 * 左对齐（用于最后一行）
 */
function leftJustify(words, maxWidth) {
    let line = words.join(' ');
    // 右侧填充空格
    return line + ' '.repeat(maxWidth - line.length);
}

/**
 * 两端对齐
 */
function justify(words, maxWidth) {
    if (words.length === 1) {
        // 只有一个单词，左对齐
        return words[0] + ' '.repeat(maxWidth - words[0].length);
    }
    
    // 计算总的单词长度
    const totalWordsLength = words.reduce((sum, word) => sum + word.length, 0);
    
    // 计算需要分配的总空格数
    const totalSpaces = maxWidth - totalWordsLength;
    
    // 计算间隙数（单词数 - 1）
    const gaps = words.length - 1;
    
    // 计算每个间隙的基本空格数和额外空格数
    const spacesPerGap = Math.floor(totalSpaces / gaps);
    const extraSpaces = totalSpaces % gaps;
    
    let result = '';
    
    for (let i = 0; i < words.length; i++) {
        result += words[i];
        
        if (i < words.length - 1) { // 不是最后一个单词
            // 添加基本空格
            result += ' '.repeat(spacesPerGap);
            
            // 前 extraSpaces 个间隙各多加一个空格
            if (i < extraSpaces) {
                result += ' ';
            }
        }
    }
    
    return result;
}

export default fullJustify;
