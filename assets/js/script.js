







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



var subir = document.querySelector('.page-top')
subir.addEventListener('click', subirTela)

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}
window.addEventListener('scroll', botaoscroll)
function botaoscroll() {
    if (window.scrollY === 0) {
        document.querySelector('.page-top').style.bottom = '-50px'
    } else {
        document.querySelector('.page-top').style.bottom = '0'

    }
}


var home = document.querySelector('nav .hm')
home.addEventListener('click', subirTela)

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

var homeMob = document.querySelector('nav .hm-mob')
homeMob.addEventListener('click', subirTela)

function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

}

var plano = document.querySelector('nav .pl')
plano.addEventListener('click', planos)

function planos() {
    window.scrollTo({
        top: 1056,
        left: 0,
        behavior: 'smooth'
    });

}

var planoMob = document.querySelector('nav .pl-mob')
planoMob.addEventListener('click', planoss)

function planoss() {
    window.scrollTo({
        top: 672,
        left: 0,
        behavior: 'smooth'
    });

}

// Scroll animation

const debouce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout - setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};





const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (elemento) {

        if ((windowTop) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass);

        }

    })
}
animeScroll();

if (target.length) {
    window.addEventListener('scroll', debouce(function () {
        animeScroll();

    }, 200))
};


let menu = document.getElementById('menu-hamburguer')

const menucont = document.getElementById('menumobile')


menu.addEventListener('click', () => {
    if (menucont.style.width == '200px') {
        menucont.style.width = '0px'
        document.querySelector('.menumob').style.display = 'none'

    } else {
        menucont.style.width = '200px'
        document.querySelector('.menumob').style.display = 'flex'
    }

})
let menuInterno = document.getElementById('menu-hamburguer--interno')
menuInterno.addEventListener('click', () => {
    if (menucont.style.width == '0px') {
        menucont.style.width = '200px'
        document.querySelector('.menumob').style.display = 'flex'
    } else {
        menucont.style.width = '0px'
        document.querySelector('.menumob').style.display = 'none'

    }
})