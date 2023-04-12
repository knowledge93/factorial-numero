//CREAR UN SISTEMA DE ENCONTRAR EL FACTORIAL DE CIERTO NUMERO INGRESADO POR UN INPUT, MOSTRAR LOS NUMEORS Y EL RESULTADO FINAL - UTILIZANDO HTML CSS.

//OBTENIENDO LOS ID 
let inputEntrada=document.querySelector("#num")
let resultadoFinal=document.querySelector("#resultado")
let resultadoNumeros=document.querySelector("#resultadoNumeros")

let calcular=document.querySelector("#calcular")
let limpiar=document.querySelector("#limpiar")

//FUNCIONES 
function limpiarEntradas(){
    inputEntrada.value=""
    resultadoFinal.value=""
    resultadoNumeros.value=""
    inputEntrada.focus()
}

function calcularFactorial(num){
    let factorial=1
    for(let i=1;i<=num;i++){
        factorial*=i
    }
    return factorial
}

function factorialCadena(num){
    let cadena=""
    for(let i=1;i<=num;i++){
        cadena+=i+"x"
    }
    let nuevaCadena=cadena.slice(0,-1)
    return nuevaCadena
}


//EVENTOS
window.addEventListener("load",()=>{
    inputEntrada.focus()
})

limpiar.addEventListener("click",()=>{
    limpiarEntradas()
})

document.addEventListener("keydown",(e)=>{
    if(e.key=="Escape"){
        limpiarEntradas()
    }
    if(e.key=="Enter"){
        resultadoFinal.value=calcularFactorial(inputEntrada.value)
        resultadoNumeros.value=factorialCadena(inputEntrada.value)
    }
})

calcular.addEventListener("click",()=>{
    resultadoFinal.value=calcularFactorial(inputEntrada.value)
    resultadoNumeros.value=factorialCadena(inputEntrada.value)
})