// https://leetcode.cn/problems/roman-to-integer/description/

var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];
        
        // 如果当前值小于下一个值，说明是特殊情况，需要减去当前值
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    
    return result;
};

export { romanToInt };
