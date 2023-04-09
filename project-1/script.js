const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

const removeActiveClasses = () => {
  panels.forEach((panel) => panel.classList.remove('active'))
}

// neler yapacağız?
// Müziklist misali sayfa yüklendiği anda sırayla resimlerin hepsini gösterip  en sonda duracak
// overflow ve addeventlistenerlara bakacağız ve farklı şeyler deneyeceğiz mesela gezermişçesine onclick olduğu durumu ekleyeceğiz.
// flex - flexbox forEach() nedir?
