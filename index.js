// List of fonts from Google Fonts to cycle through
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

// Get the h1 element
const h1Element = document.querySelector('h1');

// Function to change font every 0.5 seconds (500ms)
let currentIndex = 0;
setInterval(() => {
    // Change the font of the h1 element
    h1Element.style.fontFamily = fonts[currentIndex];
    
    // Increment the index to use the next font in the array
    currentIndex = (currentIndex + 1) % fonts.length; // Loop back to the first font after the last one
}, 500); // 500 milliseconds (0.5 seconds)
