function theBeatlesPlay(musicians, instruments) {
  var resultArray = [];
  for (var i=0; i<musicians.length; i++) {
      resultArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return resultArray;
  }
