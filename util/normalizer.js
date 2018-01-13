// This list of accents was taken from https://usefulshortcuts.com/alt-codes/spanish-alt-codes.php
// the 'ä ë ï ö ü' were added by jvelezpo since "should omit dieresis marks so a = ä" test was red
// It takes Capital spanish sccents and convert them to lower case
var Normalize = {
  'Á': 'a',
  'Ä': 'a',
  'É': 'e',
  'Ë': 'e',
  'Í': 'i',
  'Ï': 'i',
  'Ó': 'o',
  'Ö': 'o',
  'Ú': 'u',
  'Ü': 'u',
  'Ñ': 'n',
  'á': 'a',
  'ä': 'a',
  'é': 'e',
  'ë': 'e',
  'í': 'i',
  'ï': 'i',
  'ó': 'o',
  'ö': 'o',
  'ú': 'u',
  'ü': 'u',
  'ñ': 'n',
}

/**
 * This function takes care of replace spanish accents to regular utf chars
 * also it removes characters that are not letters or numbers
 * @param  {string} str input to normalize 
 * @return {string}     normalize output with spanish accents removed
 */
const normalizeChars = (str) => {
  let tempStr = str.toLowerCase().replace(/[^A-Za-z0-9\[\] ]/g, (x) => { return Normalize[x] || x; });
  return tempStr.replace(/[^A-Za-z0-9]/g, '');
}

module.exports = { normalizeChars }
