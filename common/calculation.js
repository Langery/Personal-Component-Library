function calNum (getData, sendNum) {
  var mun = getData / 100
  var getNum = sendNum % mun
  if (getNum != 0) {
    var helfmun = mun / 2
    sendNum = helfmun > getNum ? +sendNum - getNum : mun - getNum + +sendNum
  }
}