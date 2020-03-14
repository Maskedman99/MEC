var HTMLParser = require('fast-html-parser');

const TimeTableParser = response => {
  let root = HTMLParser.parse(response);
  let rows = root.querySelectorAll('.attn');

  rows = rows.map(item => JSON.stringify(item.rawText));
  rows = rows[0].split('Time Table');
  rows.shift();

  let x = JSON.stringify(rows[0].replace(/\s\s+/g, ''));
  x = x.replace(/\\\\n/g, '');
  rows = x.split('\\\\t');
  rows.shift();
  rows.pop();
  rows = rows.filter(function(e) {
    return (
      e !== ' ' &&
      e !== ' MON' &&
      e !== ' TUE' &&
      e !== ' WED' &&
      e !== ' THU' &&
      e !== ' FRI'
    );
  });
  rows = rows.filter((value, index) => index % 2);
  rows = rows.filter((value, index) => !(index % 2));
  rows.pop();
  let mon = [];
  let tue = [];
  let wed = [];
  let thu = [];
  let fri = [];
  for (let i = 0; i < 6; i++) fri.unshift(rows.pop());
  for (let i = 0; i < 6; i++) thu.unshift(rows.pop());
  for (let i = 0; i < 6; i++) wed.unshift(rows.pop());
  for (let i = 0; i < 6; i++) tue.unshift(rows.pop());
  for (let i = 0; i < 6; i++) mon.unshift(rows.pop());

  return {fri: fri, thu: thu, wed: wed, tue: tue, mon: mon};
};

export default TimeTableParser;
