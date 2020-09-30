/**
 * 场景描述：
 * 通过传入的一个时间转为指定的 yyyy-mm-dd hh:mm:ss
 */
function timeDeal (data) {
  let dateNow = data === undefined ? new Date() : new Date(data)
  let year = dateNow.getFullYear()
  let month = dateNow.getMonth() + 1
  let date = dateNow.getDate()
  let hour = dateNow.getHours()
  let min = dateNow.getMinutes()
  let sec = dateNow.getSeconds()

  function handleTime(date) {
    let fullDate = date < 10 ? `0${date}` : date
    return fullDate
  }
  return `${year}-${handleTime(month)}-${handleTime(date)} ${handleTime(hour)}%3A${handleTime(min)}%3A${handleTime(sec)}`
}

function otherDeal (sendData) {
  var date = sendData == '' ? new Date() : new Date(Number(sendData) * 1000)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes()
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return `${y}-${m}-${d} ${h}:${minute}:${second}`
}

function timeReturn (sendTime) {
  var d = new Date(sendTime)
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}