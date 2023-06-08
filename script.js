// ************ sleact switchBtn and video ***********
const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener("click",()=>{
    if(!switchBtn.classList.contains("slide")){
        switchBtn.classList.add("slide");
        video.pause();
    }else {
        switchBtn.classList.remove('slide');
        video.play();
    }
})


//**** before load all content show preLoader then hide ****** 
const preLoader = document.querySelector('.preloader');
window.addEventListener('load',()=>{
    preLoader.classList.add('hide-preloader')
})
