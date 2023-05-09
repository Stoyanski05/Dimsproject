// Nu kalder jeg min classe fra html so jeg også kan bruge den herinde 
const COLORSWITCH = document.querySelector(".color__Switch")

// Vi laver lige også en array med flere farver i
let COLOR = ["pink", "magenta", "yellow","babyblue"]

let i = 0


// Jeg laver en eventlistner så jeg kan kalde på min event i functionen 
COLORSWITCH.addEventListener("click", changeColor)

// Funktionen som er endlige den sisdte ting vi laver
function changeColor() {
    COLORSWITCH.style.color = COLOR[i]
    i++
    if (i>COLOR.length) {
        i = 0
        
    }
}