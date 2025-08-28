/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = []; // 存储数字的数组
    this.valToIndex = new Map(); // 值到索引的映射
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.valToIndex.has(val)) {
        return false; // 已存在
    }
    
    // 在数组末尾添加元素
    this.nums.push(val);
    // 记录值到索引的映射
    this.valToIndex.set(val, this.nums.length - 1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.valToIndex.has(val)) {
        return false; // 不存在
    }
    
    // 获取要删除元素的索引
    const index = this.valToIndex.get(val);
    const lastElement = this.nums[this.nums.length - 1];
    
    // 将最后一个元素移动到要删除的位置
    this.nums[index] = lastElement;
    this.valToIndex.set(lastElement, index);
    
    // 删除最后一个元素
    this.nums.pop();
    this.valToIndex.delete(val);
    
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet();
 * var param_1 = obj.insert(val);
 * var param_2 = obj.remove(val);
 * var param_3 = obj.getRandom();
 */

export default RandomizedSet;
