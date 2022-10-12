// D - Summer Vacation
// https://atcoder.jp/contests/abc137/tasks/abc137_d
// 2022-10-01T01:11:15.048Z

// https://github.com/trekhleb/javascript-algorithms/blob/d3c0ee6f7af3fce4a3a2bdc1c5be36d7c2d9793a/src/data-structures/heap/Heap.js#L25
// https://qiita.com/oimo23/items/28f743021592afa12d0b
// https://atcoder.jp/contests/abc137/submissions/6813834
const Heap = (comp = (a, b) => a - b) => {
  const h = [];
  const parentIdx = (idx) => idx - 1 >> 1;
  return {
    push(v) {
      h.push(v);
      let idx = h.length - 1;
      while (idx > 0) {
        const pIdx = parentIdx(idx);
        if (comp(h[idx], h[pIdx]) >= 0) break;
        h[idx] = h[pIdx]; // 交換
        idx = pIdx;
      }
      h[idx] = v; // こっちは最後だけ変えればいい
    },
    pop() {
      const first = h[0];
      const last = h.pop();
      let parent = 0;
      const lastParent = parentIdx(h.length);
      while (parent < lastParent) {
        const left = (parent << 1) + 1;
        const right = left + 1;
        const idx = comp(h[left], h[right]) <= 0 ? left : right;
        if (comp(last, h[idx]) <= 0) break;
        h[parent] = h[idx];
        parent = idx;
      }
      if (h.length > 0) h[parent] = last;
      return first;
    },
    get size() {
      return h.length;
    },
  };
};

function main(input = "") {
  const jobs = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const [_jobCount, _deadline] = jobs.shift();

  const schedule = [...Array(_deadline + 1)].map(() => []);
  for (const [days, salary] of jobs) {
    if (days <= _deadline) schedule[days].push(salary);
  }

  const heap = new PriorityQueue();

  let answer = 0;
  for (const s of schedule) {
    for (salary of s) {
      heap.push(-salary);
    }
    if (heap.size > 0) answer -= heap.pop();
    console.log(s, heap, answer);
  }

  return answer;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 4\n4 3\n4 1\n2 2", "5"],
    ["5 3\n1 2\n1 3\n1 4\n2 1\n2 3", "10"],
    ["1 1\n2 1", "0"],
  ];

  test("Heap", () => {
    const heap = Heap();
    [...Array(5)].forEach((_, i) => heap.push(i * 2));
    heap.push(1);
    heap.push(5);
    heap.push(10);
    heap.push(8);

    expect(heap.pop()).toEqual(0);
    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(2);
    expect(heap.pop()).toEqual(4);
    expect(heap.pop()).toEqual(5);
    expect(heap.pop()).toEqual(6);
    expect(heap.pop()).toEqual(8);
    expect(heap.pop()).toEqual(8);
    expect(heap.pop()).toEqual(10);
  });

  test("PriorityQueue", () => {
    const heap = new PriorityQueue();
    [...Array(5)].forEach((_, i) => heap.push(i * 2));
    heap.push(1);
    heap.push(5);
    heap.push(10);
    heap.push(8);

    expect(heap.pop()).toEqual(0);
    expect(heap.pop()).toEqual(1);
    expect(heap.pop()).toEqual(2);
    expect(heap.pop()).toEqual(4);
    expect(heap.pop()).toEqual(5);
    expect(heap.pop()).toEqual(6);
    expect(heap.pop()).toEqual(8);
    expect(heap.pop()).toEqual(8);
    expect(heap.pop()).toEqual(10);
  });

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test("stub", () => {
      expect().toBe();
    });
  }
}
