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

