const fs = require('fs');
const path = require('path');

const loadTemplate = problemData => {
  const templatePath = path.join(__dirname, '/_template.js');
  let template = fs.readFileSync(templatePath, 'utf8');

  template = template.replace('/*datetime*/', new Date().toISOString());

  for (let [key, value] of Object.entries(problemData)) {
    if (key == 'examples') {
      value = JSON.stringify(value || [], null, '  ')
        .slice(1, -2)
        .split(/\n/)
        .map(s => `  ${s}`)
        .join('\n')
        .trim();
    }
    template = template.replace(`/*${key}*/`, value);
  }
  return template;
};

const createTemplate = problemData => {
  // フォルダを作成
  const dir = path.resolve(path.join(__dirname, `../problems/${problemData.contestId}`));
  fs.mkdirSync(dir, { recursive: true });

  // ファイルを書き込み
  const file = path.join(dir, `${problemData.problemId}.js`);

  if (!fs.existsSync(file)) {
    const template = loadTemplate(problemData);
    fs.writeFileSync(file, template);
  }

  return file;
};

module.exports = { createTemplate };
