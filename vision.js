window.onscroll = function() {showNavbar()};
let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;
let first = document.querySelector('.first')
let a = document.querySelectorAll('.a')
const showNavbar = () => {
    if (window.pageYOffset >= 50) {
        navbar.classList.add("sticky")
        first.classList.add('navi')
        first.classList.remove('first')
        a.forEach(e => {
            e.classList.remove('a')
            e.classList.add('blacka')
        });
    } else {
        navbar.classList.remove("sticky");
        a.forEach(e => {
            e.classList.remove('blacka')
            e.classList.add('a')
        })
    }
}
let btnall = document.querySelector('.btnall')
let btnMockup = document.querySelector('.btnmockup')
let btnPackaging = document.querySelector('.btnpackaging')
let btnTypography = document.querySelector('.btntypography')
let btnPhotography = document.querySelector('.btnphotography')
let all = document.querySelectorAll('.allimg')
let pics = document.querySelector('#pics')
let flag = true
btnMockup.addEventListener('click', ()=>{
    all.forEach(e => {
        e.classList.remove('hide')
        if (!e.classList.contains('mockup')) {
            e.classList.add('hide')
        }
    });
    pics.classList.remove('selected')
    pics.classList.add('select')
})
btnPackaging.addEventListener('click', ()=>{
    all.forEach(e => {
        e.classList.remove('hide')
        if (!e.classList.contains('packaging')) {
            e.classList.add('hide')
        }
        e.classList.add('anime')
    });
    pics.classList.remove('selected')
    pics.classList.add('select')
})
btnTypography.addEventListener('click', ()=>{
    all.forEach(e => {
        e.classList.remove('hide')
        if (!e.classList.contains('typography')) {
            e.classList.add('hide')
        }
    });
    pics.classList.remove('selected')
    pics.classList.add('select')
})
btnPhotography.addEventListener('click', ()=>{
    all.forEach(e => {
        e.classList.remove('hide')
        if (!e.classList.contains('photography')) {
            e.classList.add('hide')
        }
    });
    pics.classList.remove('selected')
    pics.classList.add('select')
})
btnall.addEventListener('click', () => {
        all.forEach(e => {
            e.classList.remove('hide')
        });
        pics.classList.remove('select')
        pics.classList.add('selected')
})
