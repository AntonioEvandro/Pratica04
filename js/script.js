/*
//v1
const lista = document.querySelector("ol");

const itensLista1 = lista.querySelectorAll("li");
for(let i = 0; i < itensLista1; i++) {
    if((i+1)% 2 === 0){
        itensLista1[i].style.fontWeigth = 900;
    }
}

//v2
const itensLista2 = document.querySelectorAll("ol li")

//v3
const itensLista3 = document.getElementsByTagName("li")
*/
//v4

const itensLista1 = document.querySelectorAll("ol, li");

itensLista1.forEach( (el, idx) => {
    if ((idx+1) % 2 === 0)
        el.style.fontWeigth = 900
    el.addEventListener("click", () =>{
        console.log(el)
    })
})


/*
    Site para estudar:
        javascript.info
*/