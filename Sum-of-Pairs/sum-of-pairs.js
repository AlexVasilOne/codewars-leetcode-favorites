function sumPairs(ints, s) {
  const map = new Map();
  for (let i = 0; i < ints.length; i++) {
    let num = ints[i];
    let complement = s - num;
    if (map.has(complement)) {
      return [complement, num];
    }
    if (!map.has(num)) {
      map.set(num, i);
    }
  }
  return undefined;
}