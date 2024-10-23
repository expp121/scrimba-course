let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let sum = 0;
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    sum +=count;
    let countStr = "\u2022" + count + " "
    if (count != 0){
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
        totalEl.textContent= "Total: " + sum 
    }
}
