const timer = document.getElementById('timer')

timer.innerText = '0:0:0:0'

const relaseTime = 1668697200

setInterval(() => {
  const now = new Date().getTime()
  const timeLeft = relaseTime - now / 1000
  const hours = Math.floor((timeLeft % 86400) / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = Math.floor(timeLeft % 60)
  const milliseconds = Math.floor((timeLeft % 1) * 1000)
  timer.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`
},1)
