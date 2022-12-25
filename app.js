const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate-btn")
let password1 = document.getElementById("password-display1")
let password2 = document.getElementById("password-display2")
let copyBtn1 = document.getElementById("copy-btn-1")
let copyBtn2 = document.getElementById("copy-btn-2")

generateBtn.addEventListener("click", generatePassword)


function generatePassword() {
    let shuffled1 = characters.sort(() => 0.5 - Math.random());
    let selected1 = shuffled1.slice(0, 10);
    password1.textContent = selected1.join("")
    let shuffled2 = characters.sort(() => 0.5 - Math.random());
    let selected2 = shuffled2.slice(0, 10);
    password2.textContent = selected2.join("")
}

copyBtn1.addEventListener("click", copypassword1)
copyBtn2.addEventListener("click", copypassword2)


function copypassword1() {
    navigator.clipboard.writeText(password1.value);
}

function copypassword2() {
    navigator.clipboard.writeText(password2.value);
}