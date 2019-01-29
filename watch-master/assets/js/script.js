// clock
function clock () {
  const fullDate = new Date()
  let hours = fullDate.getHours()
  let minutes = fullDate.getMinutes()

  minutes = ('0'+minutes).slice(-2)
  hours = ('0'+hours).slice(-2)

  document.querySelector('#hours').innerHTML = hours
  document.querySelector('#minutes').innerHTML = minutes
}

setInterval(clock, 1000)

// get weekday and day
function currentDate () {
  const today = new Date()
  const dayNumber = today.getDate()

  document.querySelector('#day').innerHTML = dayNumber
  document.querySelector('#weekday').innerHTML = getDayString()
}

setInterval(currentDate)

function init () {
  clock()
  currentDate()
}

function getDayString () {
  const today = new Date()
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const dayString = weekdays[today.getDay()]
  return dayString
}