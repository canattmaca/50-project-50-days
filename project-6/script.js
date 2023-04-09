const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = (window.innerHeight * 3) / 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    console.log(boxTop)

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
