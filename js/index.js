'use strict';

const chart = document.querySelectorAll('.about__chart_data>span');

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
            //sections
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");

            // buttona
let hero_btn = document.getElementById("hero__button");
let about_menu_btn = document.getElementById("menu__item_about");
let projects_menu_btn = document.getElementById("menu__item_projects");
let contact_menu_btn = document.getElementById("menu__item_contact");


hero_btn.addEventListener("click", ()=>scroll(about));
about_menu_btn.addEventListener("click", ()=>scroll(about));
projects_menu_btn.addEventListener("click", ()=>scroll(projects));
contact_menu_btn.addEventListener("click", ()=>scroll(contact));

function scroll(element){
    element.scrollIntoView({behavior: 'smooth'});
}



