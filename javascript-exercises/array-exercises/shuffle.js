// Shuffle an array
console.log("******** SHUFFLE ARRAY ********");
const arrShuffle = [27, 93, 14, 62, 86, 5, 41, 70, 99, 18, 35, 24, 58, 3, 76, 12, 88, 45, 67, 81];

function shuffle(arrShuffle) {
    for (let i = arrShuffle.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [arrShuffle[i], arrShuffle[j]] = [arrShuffle[j], arrShuffle[i]];
    }
    return arrShuffle;
}
console.log(shuffle(arrShuffle));
console.log(shuffle(arrShuffle));
console.log(shuffle(arrShuffle));
console.log(shuffle(arrShuffle));