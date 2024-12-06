
const slides = ["assets/slides/slide1.svg",
                "assets/slides/slide2.svg",
                "assets/slides/slide3.svg",
                "assets/slides/slide4.svg",
                "assets/slides/slide5.svg",]

body = document.querySelector('body')

body.style.backgroundImage = `url(${slides[0]})`;

setTimeout(() => {
    body.style.backgroundImage = `url(${slides[1]})`;
}, 3000);

setTimeout(() => {
    body.style.backgroundImage = `url(${slides[2]})`;
}, 6000);

setTimeout(() => {
    body.style.backgroundImage = `url(${slides[3]})`;
}, 9000);

setTimeout(() => {
    body.style.backgroundImage = `url(${slides[4]})`;
    playButton = document.querySelector('.play-button')
    playButton.style.display = 'flex'
}, 12000);


