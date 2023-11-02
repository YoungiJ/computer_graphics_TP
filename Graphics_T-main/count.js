var counter = 0

function startCounter() {
  const e = document.querySelector('.text_box')
  counter ++
  e.innerHTML =  counter
  if (counter < 5) {
    setTimeout(startCounter, 0)
  }
}

startCounter()

anime({
    targets: '.text_box',
    innerHTML: [0, 5], // 카운팅할 숫자의 범위
    round: 1,
    easing: 'linear',
    duration: 5000       // 애니메이션 지속시간
})