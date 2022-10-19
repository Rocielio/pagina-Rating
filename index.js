
let containerPrincipal = document.querySelector('.containerPrincipal')
let containerOculto = document.querySelector('.containerPrincipalOculto')

let msgFinal = document.querySelector('#containerParagrafo')

let nota1 = document.querySelector('#nota1')
let nota2 = document.querySelector('#nota2')
let nota3 = document.querySelector('#nota3')
let nota4 = document.querySelector('#nota4')
let nota5 = document.querySelector('#nota5')

let nota

document.getElementById('nota1').addEventListener('click', () => {
    nota1.style.backgroundColor = 'hsl(25, 97%, 53%)'
    nota2.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota3.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota4.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota5.style.backgroundColor = 'hsl(213, 19%, 23%)'

    nota = parseInt(nota1.innerHTML)
})

document.getElementById('nota2').addEventListener('click', () => {
    nota1.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota2.style.backgroundColor = 'hsl(25, 97%, 53%)'
    nota3.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota4.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota5.style.backgroundColor = 'hsl(213, 19%, 23%)'

    nota = parseInt(nota2.innerHTML)
})

document.getElementById('nota3').addEventListener('click', () => {
    nota1.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota2.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota3.style.backgroundColor = 'hsl(25, 97%, 53%)'
    nota4.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota5.style.backgroundColor = 'hsl(213, 19%, 23%)'
    
    nota = parseInt(nota3.innerHTML)
})

document.getElementById('nota4').addEventListener('click', () => {
    nota1.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota2.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota3.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota4.style.backgroundColor = 'hsl(25, 97%, 53%)'
    nota5.style.backgroundColor = 'hsl(213, 19%, 23%)'
    

    nota = parseInt(nota4.innerHTML)
})

document.getElementById('nota5').addEventListener('click', () => {
    nota1.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota2.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota3.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota4.style.backgroundColor = 'hsl(213, 19%, 23%)'
    nota5.style.backgroundColor = 'hsl(25, 97%, 53%)'
    
    nota = parseInt(nota5.innerHTML)
})

document.getElementById('botaoSubmit').addEventListener('click', () => {
    msgFinal.innerText = `Você selecionou ${nota} de 5`
    containerPrincipal.style.display = "none"
    containerOculto.classList.remove('oculto')
})
