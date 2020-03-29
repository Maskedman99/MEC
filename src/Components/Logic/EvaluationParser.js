var HTMLParser = require('fast-html-parser');

const EvaluationParser = data => {
  let root = HTMLParser.parse(JSON.stringify(data.data));
  let cols = root.querySelectorAll('th');
  let rows = root.querySelectorAll('td');

  if (cols[0] === undefined) {
    return {rows: [], cols: [], name: ''};
  }

  let name = cols[0].childNodes[2].rawText;
  cols.shift();
  cols.shift();
  cols.shift();
  rows = rows.map(item => item.childNodes[0].rawText.replace('\\n', '').trim());
  cols = cols.map(item => item.childNodes[0].rawText.concat(item.childNodes[2].rawText));

  let cols1 = [];
  for (let i = 0, k = 0; i < rows.length; i++) {
    if (rows[i].charCodeAt(0) < 58) {
      cols1.push(cols[k]);
      k += 1;
    } else {
      cols1.push('Subject');
      k = 0;
    }
  }
  return {rows: rows, cols: cols1, name: name};
};

export default EvaluationParser;
