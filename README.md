# atcoder-js

# install

```sh
pnpm i
```

AtCoderのJavaScriptはNode.js v12.1.6なので、一応12で動くようにした。

`pnpm env use --global v12`すればバージョンを合わせることができる
ただ、文法的にはv18と主な違いはないのでわざわざバージョンを合わせなくていいかも
気になるのは以下が使えないことぐらい
- `Array#at`
- `??`
- `?.`
- `??=`

# usage

```sh
pnpm jest --watch
```

`jest --watch`は変更のあったファイル(gitでコミットされてない)のみを、変更されるたびにテストする

[Jest CLI オプション · Jest](https://jestjs.io/ja/docs/cli#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%8B%E3%82%89%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B)

# なんでjest v28なの？

jest v29からはnode v12が切り捨てられたから