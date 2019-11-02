function timeDeal () {
  let dateNow = new Date()
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

  function handleMillSec(date) {
    let fullDate = date >= 100 ? date : date >= 10 ? `0${date}` : `00${date}`
  }
  return `${year}-${handleTime(month)}-${handleTime(date)} ${handleTime(hour)}:${handleTime(min)}:${handleTime(sec)}`
  // var theTime = new Date().getTime()
  // var beforTime = theTime - (1 * 3600 * 24 * 1000 * 7)
  // var oldTime = new Date(beforTime)
  // let oldyear = oldTime.getFullYear()
  // let oldmonth = oldTime.getMonth() + 1
  // let olddate = oldTime.getDate()
  // let oldhour = oldTime.getHours()
  // let oldmin = oldTime.getMinutes()
  // let oldsec = oldTime.getSeconds()
  // this.startTime = `${oldyear}-${handleTime(oldmonth)}-${handleTime(olddate)} ${handleTime(oldhour)}:${handleTime(oldmin)}:${handleTime(oldsec)}`
}

