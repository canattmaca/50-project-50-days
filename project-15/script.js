const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increment = target / 200
    console.log(increment)
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(() => {
        updateCounter()
      }, 3)
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})

//update mantığı ve aynı zamanda olması gayet iyi, foreach kavramını ve arrowfunction mantığını daha iyi öğrendik. Burada yaptığımız sayaç her birinde eşit olmasının sebebi c + increment i iyi kullanmıs olmam . Math.ceil fonksiyonunu incelediğimiz bir sayi üstüne yıvarlarm böylece aksi durum görmeyiz.
