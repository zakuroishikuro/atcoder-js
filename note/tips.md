# 正規表現内でキャプチャグループを参照

正規表現内では`\1` `\2` `\3` を使う
[置換文字列内](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E5%BC%95%E6%95%B0%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E6%96%87%E5%AD%97%E5%88%97%E3%81%AE%E6%8C%87%E5%AE%9A)では`$1` `$2` `$3`

```js
function compress(str){
  return str.replace(/(\D)\1+/g, (m,w)=>w + m.length)
}

function decompress(str){
  return str.replace(/(\D)(\d+)/g, (m,w,d)=>w.repeat(+d));
}
```

```js
compress("aaabbc")
//=> 'a3b2c'

decompress('a3b2c')
//=> 'aaabbc'
```