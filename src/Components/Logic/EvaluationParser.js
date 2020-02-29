var HTMLParser = require("fast-html-parser");

const EvaluationParser = data => {
  let root = HTMLParser.parse(JSON.stringify(data.data));
  let cols = root.querySelectorAll("th");
  let rows = root.querySelectorAll("td");
  cols.shift();
  return rows;
};

export default EvaluationParser;
