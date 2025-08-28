/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 边界情况
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    
    // 创建每一行的字符串数组
    const rows = new Array(numRows).fill(null).map(() => []);
    
    let currentRow = 0;
    let goingDown = false;
    
    // 遍历字符串中的每个字符
    for (let char of s) {
        rows[currentRow].push(char);
        
        // 在第一行或最后一行时改变方向
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        
        // 根据方向移动到下一行
        currentRow += goingDown ? 1 : -1;
    }
    
    // 将所有行连接起来
    return rows.map(row => row.join('')).join('');
};

export default convert;
