var HTMLParser = require('fast-html-parser');

const AttendanceParser = (data, Rollno) => {
  let root = HTMLParser.parse(data);
  let rows = root.querySelectorAll('td');
  let ttnos = root.querySelectorAll('table');

  rows = rows.map(item => JSON.stringify(item.rawText).replace(/["\\]/g, ''));

  let ns = ttnos[0].childNodes[1].childNodes.length - 7; //Total no.of subjects
  ns = (ns + 2) / 2;

  let x1 = '';
  let totalClasses = '';
  for (let i = 0; i < ns * 2; i++) {
    x1 = x1 + '+' + rows[Rollno * ns * 2 + i];
    totalClasses = totalClasses + rows[i];
  }

  //x1 = x1.replace(/[rnt]/g,'') // Can't do, letters r,n,t in name gets replaced
  x1 = x1.replace('rn', '');
  x1 = x1.split('rnt').join('');
  x1 = x1.split('t ').join('');
  x1 = x1.split('n ').join('');
  x1 = x1.split('nt').join('');
  x1 = x1.split('+');

  let t1 = '';
  //rows[rows.length -42] is the last entry
  for (let i = rows.length - 41 - (ns * 2 - 2) * 2; i < rows.length - 41; i++)
    t1 = t1 + '+' + rows[i];
  const t2 = t1.split('+n');

  let a1 = '';
  let et1 = '';
  for (let i = 0; i < t2.length; i++) {
    if (i % 2 !== 0) a1 = a1 + '+' + t2[i];
    else et1 = et1 + '+' + t2[i];
  }

  a1 = a1.split('+');
  et1 = et1.split('+');
  a1.shift();

  let totalClasses1 = totalClasses.match(/\(([^)]+)\)/g);
  totalClasses1 = totalClasses1.map(item => item.replace(/[()]/g, ''));

  return {x: x1, et: et1, a: a1, tc: totalClasses1};
};

export default AttendanceParser;
