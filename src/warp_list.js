// provides function getNextWarp()

var allWarps = [
    new SimpleWarp(),
    new SpinWarp(),
    new FunkyWarp(),
]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

var warpSeq = shuffle(allWarps);

var warpIndex = 0;

function getNextWarp(){
    warpIndex = (warpIndex+1)%warpSeq.length
    return warpSeq[warpIndex]
}