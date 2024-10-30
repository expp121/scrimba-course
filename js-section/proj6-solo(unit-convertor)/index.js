const inputEl = document.getElementById("val-input")
const valueElements = document.getElementsByClassName("converted-value")
const convertBtn = document.getElementById("convert-btn")

const conversionValue = [
    3.281,
    0.264,
    2.204
]

const conversionName = [ "meters","feet",
    "liters","gallons",
    "kilos", "pounds"
]

convertBtn.addEventListener("click",function(){
    const inputVal = Number(inputEl.value)
    for (let i = 0; i < valueElements.length; i++) {
        valueElements[i].textContent = `${inputVal} ${conversionName[i*2]} = ${(inputVal * conversionValue[i]).toFixed(3)} ${conversionName[i*2 +1]} |
        ${inputVal} ${conversionName[i*2+1]} = ${(inputVal / conversionValue[i]).toFixed(3)} ${conversionName[i*2]}`        
    }
})

