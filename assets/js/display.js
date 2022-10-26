let cadastro = document.querySelector('.header--button')
let cadastrar = document.getElementById('cadastro')
let login = document.getElementById('logar')

cadastro.addEventListener('click', () => {
    if (cadastrar.style.right == '0') {
        cadastrar.style.right = '-400px'
    } else {
        cadastrar.style.right = '0'
    }
})
function voltar() {
    if (cadastrar.style.right == '-400px' && login.style.right == '-400px') {
        cadastrar.style.right = '0'
        login.style.right = '0'
    } else {
        cadastrar.style.right = '-400px'
        login.style.right = '-400px'
    }
}

function logar() {

    if (login.style.right == '0') {
        login.style.right = '-400px'
    } else {
        login.style.right = '0'
    }
}



// Duvidas 

const c = (el) => document.querySelector(el);

let set01 = document.querySelector('.seta01')

set01.addEventListener('click', () => {
    if (document.querySelector('.txt').style.display == 'flex') {
        document.querySelector('.txt').style.display = 'none'
        document.querySelector('.bx').style.backgroundColor = 'transparent'
        document.querySelector('.seta01').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt').style.display = 'flex'
        document.querySelector('.bx').style.backgroundColor = '#F82121'
        document.querySelector('.seta01').src = 'assets/images/seta.png'
        c('.txt').style.opacity = 0;
        setTimeout(() => {
                c('.txt').style.opacity = 1;
        }, 100)
        
    }
})

let set02 = document.querySelector('.seta02')

set02.addEventListener('click', () => {
    if (document.querySelector('.txt02').style.display == 'flex') {
        document.querySelector('.txt02').style.display = 'none'
        document.querySelector('.bx2').style.backgroundColor = 'transparent'
        document.querySelector('.seta02').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt02').style.display = 'flex'
        document.querySelector('.bx2').style.backgroundColor = '#F82121'
        document.querySelector('.seta02').src = 'assets/images/seta.png'
        c('.txt02').style.opacity = 0;
        setTimeout(() => {
                c('.txt02').style.opacity = 1;
        }, 100)
    }
})

let set03 = document.querySelector('.seta03')

set03.addEventListener('click', () => {
    if (document.querySelector('.txt03').style.display == 'flex') {
        document.querySelector('.txt03').style.display = 'none'
        document.querySelector('.bx3').style.backgroundColor = 'transparent'
        document.querySelector('.seta03').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt03').style.display = 'flex'
        document.querySelector('.bx3').style.backgroundColor = '#F82121'
        document.querySelector('.seta03').src = 'assets/images/seta.png'
        c('.txt03').style.opacity = 0;
        setTimeout(() => {
                c('.txt03').style.opacity = 1;
        }, 100)
    }
})

let set04 = document.querySelector('.seta04')

set04.addEventListener('click', () => {
    if (document.querySelector('.txt04').style.display == 'flex') {
        document.querySelector('.txt04').style.display = 'none'
        document.querySelector('.bx4').style.backgroundColor = 'transparent'
        document.querySelector('.seta04').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt04').style.display = 'flex'
        document.querySelector('.bx4').style.backgroundColor = '#F82121'
        document.querySelector('.seta04').src = 'assets/images/seta.png'
        c('.txt04').style.opacity = 0;
        setTimeout(() => {
                c('.txt04').style.opacity = 1;
        }, 100)
    }
})
let set05 = document.querySelector('.seta05')

set05.addEventListener('click', () => {
    if (document.querySelector('.txt05').style.display == 'flex') {
        document.querySelector('.txt05').style.display = 'none'
        document.querySelector('.bx5').style.backgroundColor = 'transparent'
        document.querySelector('.seta05').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt05').style.display = 'flex'
        document.querySelector('.bx5').style.backgroundColor = '#F82121'
        document.querySelector('.seta05').src = 'assets/images/seta.png'
        c('.txt05').style.opacity = 0;
        setTimeout(() => {
                c('.txt05').style.opacity = 1;
        }, 100)
    }
})
let set06 = document.querySelector('.seta06')

set06.addEventListener('click', () => {
    if (document.querySelector('.txt06').style.display == 'flex') {
        document.querySelector('.txt06').style.display = 'none'
        document.querySelector('.bx6').style.backgroundColor = 'transparent'
        document.querySelector('.seta06').src = 'assets/images/seta-para-baixo.png'
    } else {
        document.querySelector('.txt06').style.display = 'flex'
        document.querySelector('.bx6').style.backgroundColor = '#F82121'
        document.querySelector('.seta06').src = 'assets/images/seta.png'
        c('.txt06').style.opacity = 0;
        setTimeout(() => {
                c('.txt06').style.opacity = 1;
        }, 100)
    }
})