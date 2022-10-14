let seta01 = document.querySelector('.seta01')

seta01.addEventListener('click', seta1)


function seta1() {
    if (document.querySelector('.duvidas-txt').style.display == 'flex') {
        document.querySelector('.duvidas-txt').style.display = 'none'
        document.querySelector('.duvidas-box').style.backgroundColor = 'transparent'
        document.querySelector('.seta01').src = 'assets/images/seta-para-baixo.png'

    } else {
        document.querySelector('.duvidas-txt').style.display = 'flex'
        document.querySelector('.duvidas-box').style.backgroundColor = '#F82121'
        document.querySelector('.seta01').src = 'assets/images/seta.png'

    }

}



            // Slide

let feed = document.getElementById('seta')
feed.addEventListener('click', setar)

function setar() {
    if (document.querySelector('.fedback-slide').style.marginLeft == '0px') {
        document.querySelector('.fedback-slide').style.marginLeft = '-600px'
    } else if (document.querySelector('.fedback-slide').style.marginLeft == '-600px') {
        document.querySelector('.fedback-slide').style.marginLeft = '-1200px'
    } else {
        document.querySelector('.fedback-slide').style.marginLeft = '-1200px'
    }
}

let feed2 = document.getElementById('seta2')
feed2.addEventListener('click', setar2)

function setar2() {
    if (document.querySelector('.fedback-slide').style.marginLeft == '-1200px') {
        document.querySelector('.fedback-slide').style.marginLeft = '-600px'
    } else if (document.querySelector('.fedback-slide').style.marginLeft == '-600px') {
        document.querySelector('.fedback-slide').style.marginLeft = '0px'
    } else {
        document.querySelector('.fedback-slide').style.marginLeft = '0'
    }
}





// Scroll abaixo


var home= document.querySelector('nav .hm')
home.addEventListener('click', subirTela)

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

var plano= document.querySelector('nav .pl')
plano.addEventListener('click', planos)

function planos() {
    window.scrollTo({
        top: 1172,
        left: 0,
        behavior: 'smooth'
    });

}

// Scroll animation

const debouce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout - setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};





const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
target.forEach(function(elemento){

    if((windowTop) > elemento.offsetTop){
        elemento.classList.add(animationClass);
    }else{
        elemento.classList.remove(animationClass);

    }

    })
}
animeScroll();

if(target.length){
window.addEventListener('scroll', debouce(function(){
    animeScroll();
    console.log('asasaas')
}, 200))};