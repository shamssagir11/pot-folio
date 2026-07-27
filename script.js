/*====================================
        MOBILE MENU
====================================*/

const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


/*====================================
        TYPING EFFECT
====================================*/

const words = [
    "Software Developer",
    "Java Developer",
    "AI & ML Enthusiast",
    "Tech Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    }
    else {

        typing.textContent = current.substring(0, charIndex--);

    }

    if (charIndex === current.length + 1) {

        deleting = true;

        setTimeout(typeEffect, 1200);

        return;

    }

    if (charIndex === 0 && deleting) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/*====================================
        COUNTER
====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / 120;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                }
                else {

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*====================================
        SKILL BAR ANIMATION
====================================*/

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.transform = "scaleX(1)";
            entry.target.style.opacity = "1";

        }

    });

}, { threshold: 0.5 });

skillBars.forEach(bar => {

    bar.style.transform = "scaleX(0)";
    bar.style.transformOrigin = "left";
    bar.style.opacity = "0";
    bar.style.transition = "1.4s ease";

    skillObserver.observe(bar);

});


/*====================================
        ACTIVE NAVBAR
====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1800);

});


/*==========================
TECH STACK ANIMATION
==========================*/

const techCards = document.querySelectorAll(".tech-card");

techCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

});

});

/*==========================
GITHUB API
==========================*/

fetch("https://api.github.com/users/shamssagir11")

.then(response => response.json())

.then(data => {

document.getElementById("repoCount").innerHTML=data.public_repos;

document.getElementById("followers").innerHTML=data.followers;

document.getElementById("following").innerHTML=data.following;

});

/*==========================
TIMELINE ANIMATION
==========================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

timelineItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition="0.8s";

timelineObserver.observe(item);

});

/*====================================
        SCROLL REVEAL
====================================*/

const revealElements = document.querySelectorAll(
".service-card,.tech-card,.project-card,.counter-card,.timeline-item,.featured-container,.about-container,.education-card,.certificate-card,.contact-container"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-element");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.classList.add("hidden-element");

revealObserver.observe(el);

});

/*====================================
        NAVBAR SCROLL
====================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*====================================
        HERO 3D EFFECT
====================================*/

const heroImage=document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

heroImage.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

if(heroImage){

heroImage.style.transform="rotateY(0deg) rotateX(0deg)";

}

});

/*====================================
        BUTTON RIPPLE
====================================*/

document.querySelectorAll(".btn,.btn2").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*====================================
        CONTACT FORM
====================================*/

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name=document.getElementById("name").value.trim();

alert("Thank You "+name+" 😊\nYour message has been received.");

form.reset();

});

}

/*====================================
        BACK TO TOP
====================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

topBtn.style.display=window.scrollY>500?"flex":"none";

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

document.getElementById("year").textContent=new Date().getFullYear();