'use strict';

const chart = document.querySelectorAll('.about__chart_data>span');

console.log(chart)
const displayAnimations = (entries, observer)=>{
    entries.forEach((entrie, i)=>{
        if(entrie.isIntersecting){
            entrie.target.style.transform = 'scaleX(1)';
        }
    })    
}

let observer = new IntersectionObserver(displayAnimations, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,     
})


chart.forEach(bar=>{
    observer.observe(bar)
})

// --------------------------------------------------
let about = document.getElementById("about");
let hero_btn = document.getElementById("hero__button");

hero_btn.addEventListener("click", ()=>scroll(about));

function scroll(element){
    element.scrollIntoView({behavior: 'smooth'});
}



