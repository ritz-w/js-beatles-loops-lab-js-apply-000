function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  for (var i=0; i<musicians.length; i++) {
      resultArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return resultArray;
  }

function johnLennonFacts(facts){
  var resultFacts = [];
  for (var i=0; i<facts.length; i++) {
    resultFacts.push(facts[i].concat("!!!"));
  }
  return resultFacts;
}

function iLoveTheBeatles(sentence){
  var resultLoop = [];
  var i = 0;
  while (i <=15 && i < sentence) {
    resultLoop.push("I love the Beatles!");
    i++;
  }
  return resultLoop;
}
