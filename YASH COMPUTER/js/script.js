function toggleMenu(){
let nav = document.getElementById("nav");
if(nav){
nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
}

// 🔥 SAFE SLIDER CODE (ERROR FIX)
let slides = document.getElementsByClassName("carousel-item");
let current = 0;

function showSlide(index){
if(slides.length === 0) return; // 🔥 FIX

for(let i=0;i<slides.length;i++){
slides[i].classList.remove("active");
}

if(slides[index]){
slides[index].classList.add("active");
}
}

function moveSlide(step){
if(slides.length === 0) return; // 🔥 FIX

current += step;

if(current >= slides.length) current = 0;
if(current < 0) current = slides.length - 1;

showSlide(current);
}

// auto play
if(slides.length > 0){
setInterval(()=>{
moveSlide(1);
},3000);
}

function toggleMenu(){
let nav = document.getElementById("nav");
if(nav){
nav.classList.toggle("active");
}
}