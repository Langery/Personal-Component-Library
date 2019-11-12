/**
 * 场景描述：
 * 有一个输入框需要输入一定的参数（sendNum），但是有一个最大范围（getData），且规定当前输入的数可以被最大范围整除，如果不能整除取最近的可被整除的数字
 */
function calNum (getData, sendNum) {
  var mun = getData / 100
  var getNum = sendNum % mun
  if (getNum != 0) {
    var helfmun = mun / 2
    sendNum = helfmun > getNum ? +sendNum - getNum : mun - getNum + +sendNum
  }
}