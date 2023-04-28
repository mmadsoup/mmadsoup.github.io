let aboutPic = document.getElementById("about-pic");
let spotlightAlbum = document.getElementById("project-spotlight");

let spotlightCol1 = document.getElementById("spotlight-1");
let spotlightCol2 = document.getElementById("spotlight-2");
let spotlightCol3 = document.getElementById("spotlight-3");

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('.box');
const message = document.querySelector('#message');

document.addEventListener('scroll', function () {
    const picInViewPort = isInViewport(aboutPic) 
    const spotlightAlbumInViewport = isInViewport(spotlightAlbum);
    if (picInViewPort) {
        aboutPic.classList.add("animate__rubberBand");
    }

    // if (spotlightAlbumInViewport) {
    //     console.log("hi");
    //     spotlightCol1.classList.add("animate__bounce");
    //     spotlightCol2.classList.add("animate__bounce");
    //     spotlightCol3.classList.add("animate__bounce");
    // }

}, {
    passive: true
});

