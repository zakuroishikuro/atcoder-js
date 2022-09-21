const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, '/_template.js');
const TEMPLATE = fs.readFileSync(TEMPLATE_PATH, 'utf8');

const prepareTemplate = problem => {
  return Object.entries(problem).reduce((t, [k, v]) => {
    if (typeof v == 'object') {
      // オブジェクトは整形し、外側のカッコを取る
      v = JSON.stringify(v, null, '  ').slice(2, -2).replace(/^  /gm, '');

      // インデントがあればインデント
      const [indent] = TEMPLATE.match(new RegExp(`( +)(?=/\\*${k}\\*/)`)) || [];
      if (indent) v = v.replace(/^/gm, indent).trim();
    }
    // 置換
    return t.replace(`/*${k}*/`, v);
  }, TEMPLATE);
};

const createTemplate = problem => {
  // サニタイズ
  let { contestId, problemId, timestamp } = problem;
  contestId = contestId.replace(/[^-\w]/g, '');
  problemId = problemId.replace(/[^-\w]/g, '');
  timestamp = timestamp.replace(/\D+/g, '');

  // フォルダを作成
  const dirPath = path.join(__dirname, `../problems/${contestId}`);
  fs.mkdirSync(dirPath, { recursive: true });

  // ファイルを作成
  const filePath = path.join(dirPath, `${problemId}.js`);
  const template = prepareTemplate(problem);
  fs.writeFileSync(filePath, template);

  return filePath;
};

module.exports = { createTemplate };
