/* fontfamily inherit nedir 
 scale() nedir 
 btn focus
 outline? */

const progress = document.getElementById('progress')
const priv = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  uptade()
})
priv.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = circles.length
  }
  uptade()
})

function uptade() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + `%`
  if (currentActive === 1) {
    priv.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    priv.disabled = false
    next.disabled = false
  }
  const activess = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + `%`
  if (currentActive === 1) {
    priv.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    priv.disabled = false
    next.disabled = false
  }
}
//  dfsdfsdfsdfsdfsdfsdf
