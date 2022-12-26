let sliderWrap = document.querySelector('.slider-wrap');
let slider = document.querySelector('.slider');
let clonesWidht;
let sliderWidht;
let clones;
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.slider-item')]
let images = [...document.querySelectorAll('.img-div')];

images.forEach((image, idx) => {
    image.style.backgroundImage =`url(./images/${idx+1}.jpeg)`
})


items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

function getClonesWidtth() {
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}

function getScrollPos() {
return window.scrollY;

}
function setScrollPos(pos){
    window.scrollTo({top: pos})
}

function scrollUpdate() {
    scrollPos =  getScrollPos();
    if(clonesWidht + scrollPos >= sliderWidht) {
        window.scrollTo({top: 1});
    }else if(scrollPos <=0) {
        window.scrollTo({top: sliderWidht - clonesWidht -1})
    }

    slider.style.transform = `translateX(-${window.scrollY}px)`

    requestAnimationFrame(scrollUpdatr)
}

function onLoad(){
    calculateDimensions()
    document.body.style.height = `${sliderWidht}px`
    window.scrollTo({top: 1});
    scrollUpdate();
}

function calculateDimensions(){
    sliderWidht = slider.getBoundingClientRect().width;
    clonesWidht = getClonesWidtth();
}

onLoad()


