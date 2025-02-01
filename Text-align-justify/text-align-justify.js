function justify(text, width) {
  const arrOfWords = text.split(' ');
  const arrOfLines = ['']
  let currentLine = 0;
  for(let i = 0; i < arrOfWords.length; i++){
    if(arrOfLines[currentLine].length + arrOfWords[i].length <= width) {
      arrOfLines[currentLine] += arrOfWords[i] + ' '
      //if no more words can be added we need to trim space
    } else {
      currentLine++;
      arrOfLines.push('');
      arrOfLines[currentLine] += arrOfWords[i] + ' '
      
    }
  }
  
  return arrOfLines.map((line, index) => {
    if (index === arrOfLines.length - 1) return line.trim(); // last line not touched
    let amountSpaces = width - line.trim().length; // need to add spaces
    let counter = 0;
    let wordLine = line.trim().split(' ');
    while(amountSpaces > 0) {
      wordLine[counter % (wordLine.length - 1)] += ' ';
      amountSpaces--;
      counter++;
    }
    return wordLine.join(' ')
  }).join('\n')
}