let colors = []
const colorPickerBox = document.getElementById("color-box")
const modeDropdown = document.getElementById("color-scheme")

document.addEventListener("submit",function(e) {
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerBox.value.substring(1)}&format=json&mode=${ modeDropdown.value}`)
    .then(r => r.json())
    .then(data => {
        let html =''
        data.colors.forEach(color => {
            html+=`
            <div class="color-data" data-color="${color.hex.value}">
                <div class="color-container" data-color="${color.hex.value}" style="background-color:${color.hex.value};"></div>
                <p class="color-value" data-color="${color.hex.value}">${color.hex.value}</p>
            </div>
            `
        });
        document.getElementById("colors-container").innerHTML = html

        for (let item of document.getElementsByClassName("color-data")) {

            item.addEventListener("click",function(event){
                navigator.clipboard.writeText(event.target.dataset.color);
                item.style.border="3px solid green"
                setTimeout(function(){
                     item.style.border="none"
                },1500)
            })
        }
        

    })
})