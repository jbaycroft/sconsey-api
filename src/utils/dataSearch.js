const escapeStringRegexp = require('escape-string-regexp');

const dataSearch = (word, data) => {

  if (word.length < 1) {
    return data;
  }

  let res = [];
  // escape special characters when creating regex string
  const regex = new RegExp(escapeStringRegexp(word), 'i');
  // filter data objects
  data.forEach((item) => {
    // set boolean to prevent adding the same record to the filtered array twice
    let added = false;
    // filter by each search parameter (global search)
    if (word.length > 0) {    
        if (String(item.Title).match(regex) && added === false) {
            // add item and mark item as added to prevent duplication
            res.push(item);
            added = true;
        }
    }
  });
  return res;
};

export default dataSearch;