// javascript-algorithms > Sieve of Eratosthenes
// https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/sieve-of-eratosthenes
export function sieve(max) {
  const not = Array(max + 1), primes = []; // notを{}や[]にしても動作変わらないけどベンチしたらこれが一番早かった
  for (let i = 2; i <= max; i++) {
    if (not[i]) continue;
    primes.push(i);
    let j = i * i;
    while (j <= max) not[j] = true, j += i;
  }
  return primes;
}

// javascript-algorithms > Primality Test
// https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/primality-test
//
// Wikipedia > Primality test
// https://en.wikipedia.org/wiki/Primality_test#JavaScript
//
// 鉄則本 P.157
export function isPrime(n) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}