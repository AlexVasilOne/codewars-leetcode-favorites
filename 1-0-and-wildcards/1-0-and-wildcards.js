function possibilities(str) {
  let queue = [str];
  let result = [];
  while (queue.length != 0) {
    let elem = queue.pop();
    const index = elem.indexOf('?');
    if (index === -1) {
      result.push(elem);
      continue
    }
    let elem1 = elem.substring(0, index) + '1' + str.substring(index + 1);
    let elem2 = elem.substring(0, index) + '0' + str.substring(index + 1);
    queue.push(elem1, elem2);
  }
  return result
}