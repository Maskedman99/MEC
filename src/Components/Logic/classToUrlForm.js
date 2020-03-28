const classToUrlForm = (branch, sem) => {
  let url = sem;
  if (branch === 0) url = 'C' + url + 'A';
  else if (branch === 1) url = 'C' + url + 'B';
  else if (branch === 2) url = 'EE' + url;
  else if (branch === 3) url = 'E' + url + 'A';
  else if (branch === 4) url = 'E' + url + 'B';
  else url = 'B' + url;

  return url;
};

export default classToUrlForm;
