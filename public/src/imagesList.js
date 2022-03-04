const images = document.getElementsByClassName("img")

for (let i = 0; i < images.length; i++) {
    images[i].classList.add(`img${i}`)
}