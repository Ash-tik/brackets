module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 != 0) {

    return false;
  }

  var str1 = str.split('');
  console.log('InitialStr1: ' + str1);
  var strLength = str1.length;

  while (str1.length > 0) {
    //console.log('StarrtStr1: ' + str1);
    strLength = str1.length;

    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str1[i] === bracketsConfig[j][0] &&
            str1[i + 1] === bracketsConfig[j][1]) {
          str1[i] = '';
          str1[i + 1] = '';
          str1 = str1.join('').split('');
        } 
      }
    }
    //console.log('Finish Str1: ' + str1);
    //console.log('Finish Str1: ' + str1.join(''));
    if (str1.join('').length === 0) {
      return true;
    }
    if (str1.join('').length === strLength) {
      //console.log('strLength === str1.length');
      return false;
    }
  }
  if (strLength === str1.length) return false;
}
