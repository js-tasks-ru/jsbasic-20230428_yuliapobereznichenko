function ucFirst(str) {
  let firstLetter = str.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + str.slice(1);
}
