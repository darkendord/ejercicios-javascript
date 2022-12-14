const formulario = document.getElementById("formulario")
const pantalla = document.getElementById("pantalla")
const selector = document.getElementById("selector")
const textArea = document.getElementById("textArea")
const pantallaSection = document.getElementById("pantallaSection")
const pTag = document.querySelector(".pTag")
const icon = document.querySelectorAll(".icon")
const icons = document.getElementById("icons")
const resetBtn = document.getElementById("reset")



formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    

    const altura = formulario.elements.altura.value;
    const ancho = formulario.elements.ancho.value;
    const color = formulario.elements.color.value;

    pantalla.style.width = ancho + "px";
    pantalla.style.height = altura + "px";
    
    const h1 =  document.querySelector(".header");


    altura && ancho ? h1.innerText = `Altura: ${altura}px - Ancho: ${ancho}px` : null;

    altura && ancho ? pantallaSection.classList.remove("active"): null;
    
    
    let selectedIndex = selector.selectedIndex;

    textArea.value && altura && ancho ? pTag.innerText = textArea.value : textArea.value === "" ? pTag.innerText = "": null;

console.log(textArea.value)


resetBtn.addEventListener("click",()=>{
    console.log("Btn pressed")
    pantallaSection.classList.add("active")
    formulario.elements.altura.value = "";
    formulario.elements.ancho.value = "";
    formulario.elements.color.value = "#000000";
    textArea.value = "";
    icons.style.color = "#000000"
})



    switch(selectedIndex){
        case 0:
            pantalla.style.background = color;
            break;
        case 1:
            h1.style.color = color;
            break;
        case 2:
            pTag.style.color = color;
            break;
        case 3:
            icon.forEach((item)=>{
                item.addEventListener("mouseenter",()=>{
                item.style.color = color
            })
            item.addEventListener("mouseout",()=>{
                item.style.color = "";
            })
            })
            break;
    }

   
})
