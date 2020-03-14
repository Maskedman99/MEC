var HTMLParser = require('fast-html-parser');

const KTUParser = resource => {
  let x = HTMLParser.parse(resource).querySelectorAll('.annuncement');
  let str = JSON.stringify(x[0].rawText);

  str = str.replace(/\\t/g, '');
  str = str.replace(/"/g, '');
  str = str.replace(/ {2}/g, ''); //means 2 spaces {2} is eslint requirement
  x = str.split('\\n');

  for (let i = 0; i < x.length; i++)
    if (x[i].length < 2) {
      x.splice(i, 1);
      i = -1; //Every time splice is used a new array is copied into the old one, if 0 used 1st null don't
    } // get deleted. If the statement not used then then index of the old array is used.

  return x;
};

export default KTUParser;
