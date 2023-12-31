// This is almost entirely Cole Steele's code

function colorize(){
    const red = Math.floor(Math.random() * 0);
    const green = Math.floor(256-(Math.random() * 128)); // light green only
    const blue = Math.floor(Math.random() * 0);

    return `rgb(${red},${green},${blue})`
}

// change each letter to a random color
const letters = document.querySelectorAll('.letter');
const intervalID = setInterval(function(){
    for (let letter of letters){
        letter.style.color = colorize();
    }
}, 1000);