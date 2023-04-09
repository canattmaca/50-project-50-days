const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})
// toggle aynı şeyi hem ekleyip hem kaldırmak istediğimizde kullancağımız kısa yol
