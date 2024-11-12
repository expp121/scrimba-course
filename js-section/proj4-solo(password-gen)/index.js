const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let usingNum = true
let usingSym = true

let pf1 = document.getElementById("pf1")
let pf2 = document.getElementById("pf2")
function generatePass(){
    let pLength = document.getElementById("len-input").value
    let characterSet = [...letters];
    if (usingNum) characterSet = characterSet.concat(numbers);
    if (usingSym) characterSet = characterSet.concat(symbols);
    pf1.style.setProperty("border","none")
    pf2.style.setProperty("border","none")
    let pass1="", pass2="";
    for(let i = 0; i < pLength; i++){
        pass1 += characterSet[Math.floor(Math.random() * characterSet.length)]
        pass2 += characterSet[Math.floor(Math.random() * characterSet.length)]
    }
    pf1.textContent = pass1
    pf2.textContent = pass2
}


function copy(){
    document.execCommand("copy");
}

pf1.addEventListener("copy", function(event){
 event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pf1.textContent);
    pf1.style.setProperty("border","1px solid #55F991")
  }
});

pf2.addEventListener("copy", function(event){
 event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pf2.textContent);
    pf2.style.setProperty("border","1px solid #55F991")
  }
});


function useNum(){
    usingNum = !usingNum
    document.getElementById("num-btn").classList.toggle("not-active-btn")
}

function useSym(){
    usingSym = !usingSym
    document.getElementById("sym-btn").classList.toggle("not-active-btn")
    
}