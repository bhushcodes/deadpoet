const fonts = [
    'Bubbler One, cursive',
    'Caveat, cursive',
    'Comforter Brush, cursive',
    'Gloria Hallelujah, cursive',
    'Leckerli One, cursive',
    'Playwrite HU, cursive',
    'Princess Sofia, cursive',
    'WindSong, cursive'
];

const h1Element = document.querySelector('h1');
let currentIndex = 0;
setInterval(() => {
    h1Element.style.fontFamily = fonts[currentIndex];
    currentIndex = (currentIndex + 1) % fonts.length; 
}, 500); 
