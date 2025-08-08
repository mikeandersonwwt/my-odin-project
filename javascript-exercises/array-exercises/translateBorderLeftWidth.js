console.log("******** TRANSLATE BORDER LEFT WIDTH ********");
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log(camelize("border-left-width"));