/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;
    
    let jumps = 0; // 跳跃次数
    let currentEnd = 0; // 当前跳跃能到达的边界
    let farthest = 0; // 下一次跳跃能到达的最远位置
    
    // 注意：不需要遍历到最后一个元素，因为到达最后一个元素就结束了
    for (let i = 0; i < nums.length - 1; i++) {
        // 更新下一次跳跃能到达的最远位置
        farthest = Math.max(farthest, i + nums[i]);
        
        // 如果到达了当前跳跃的边界，需要进行下一次跳跃
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
            
            // 如果已经能到达最后一个位置，可以提前结束
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
};

export default jump;
