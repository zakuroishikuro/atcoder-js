const cl = (op, a = 0) => n => a = op(a, n);

const cumsum = (nums) => nums.map(cl((a, n) => a + n, 0)); //累積和
const cumprod = (nums) => nums.map(cl((a, n) => a * n, 1)); //累積積
const cummax = (nums) => nums.map(cl((a, n) => Math.max(a, n), nums[0]));
const cummin = (nums) => nums.map(cl((a, n) => Math.min(a, n), nums[0]));

module.exports = { cumsum, cumprod, cummax, cummin };