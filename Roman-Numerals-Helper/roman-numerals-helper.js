class RomanNumerals {
  static symbolsDict = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]);

  static toRoman(num) {
    let result = '';
    for(let [key, value] of RomanNumerals.symbolsDict) {
      if( num/key >= 1) {
        result += RomanNumerals.symbolsDict.get(key).repeat(Math.floor(num/key));
        num -= key * Math.floor(num/key)
      }
      if(num === 0) break
    }
    return result;
  }

  static fromRoman(str) {
    let result = 0;
    while (str) {
      for(let [key, value] of RomanNumerals.symbolsDict) {
        if(str.startsWith(value)) { 
          result += key;
          str = str.slice(value.length); 
        }
      }
    }
    return result;
  }
}