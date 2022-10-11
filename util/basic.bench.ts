import { sieve } from "./prime"

import { bench, describe } from 'vitest'

bench('normal', () => {
  sieve(1000000)
}, { time: 100 });