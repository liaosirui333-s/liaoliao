const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

const videos = document.querySelectorAll('video')
videos.forEach(video => {
    video.addEventListener('click', e => {
        lightbox.classList.add('active')
        const vid = document.createElement('video')
        vid.src = video.src

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(vid)
    })
    video.addEventListener("mouseover", e => {
        video.play();
    })
    video.addEventListener("mouseout", e => {
        video.pause();
    })
})





lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})