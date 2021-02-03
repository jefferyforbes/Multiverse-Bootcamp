// Minimum Functions to Use

// onclick()
// onmouseover()
// input() ------------------
// focus() 
// keydown()
// keyup()
// mouseenter()
// resize()

const chadWindow = document.getElementById("chadWindow");

// function testing(chadWindow) {

// let tty = document.getElementById("chadWindow").innerHTML = "Im just testing stuff"

// };

function chadWarrior() {
    let warriorText = document.getElementById("warrior-name").value
    let chadWindow
    // chadWindow = document.getElementById("chadWindow").innerHTML = `The kingdom is in your heads now ${warriorText}`

    if (warriorText) {
        chadWindow = document.getElementById("chadWindow").innerHTML = `The kingdom is in your heads now ${warriorText}`
    } else if (warriorText === "chad") {
        chadWindow = document.getElementById("chadWindow").innerHTML = "Oh A Great Chad is with Us!"
    }
}

function dontClick() {
    setTimeout(() => {
        alert("Don't think about it!")
    }, 1050)
};

function rickRolled() {
    myWindow = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "You got Rolled", width=500, height=500)
    myWindow.document.write
}