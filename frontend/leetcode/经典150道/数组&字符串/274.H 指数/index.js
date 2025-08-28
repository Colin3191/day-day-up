/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // 方法一：排序
    citations.sort((a, b) => b - a); // 降序排序
    
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        // 如果当前论文的引用次数 >= 位置+1，说明至少有 i+1 篇论文被引用了至少 i+1 次
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break; // 后面的论文引用次数更少，不可能满足条件
        }
    }
    
    return h;
};

// 方法二：计数排序
var hIndexCounting = function(citations) {
    const n = citations.length;
    const count = new Array(n + 1).fill(0);
    
    // 统计每个引用次数的论文数量
    for (const citation of citations) {
        if (citation >= n) {
            count[n]++; // 引用次数 >= n 的都放在 count[n]
        } else {
            count[citation]++;
        }
    }
    
    // 从高到低累计论文数量
    let total = 0;
    for (let i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) {
            return i; // 找到最大的 h 指数
        }
    }
    
    return 0;
};

export default hIndex;
