const sum = (nums) => nums.reduce((a, b) => a + b, 0);
const prod = (nums) => nums.reduce((a, b) => a * b, 1);
const max = (nums) => nums.reduce((a, b) => Math.max(a, b), nums[0] || 0);
const min = (nums) => nums.reduce((a, b) => Math.min(a, b), nums[0] || 0);

const mean = (nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

module.exports = { sum, prod, max, min, mean };