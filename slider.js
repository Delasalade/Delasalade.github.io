const delay = 6000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1;
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
};




const more = document.getElementById("more");
const readmore = document.getElementById("readmore");
const container = document.getElementById("text-container");

more.addEventListener("click", function toggleread() {
    readmore.classList.add("visible");
    more.classList.add("hide");

})


const header = document.getElementById("header");
const phone_ul = document.getElementById("phone-ul");
//const phone_ul = document.document.getElementsByClassName("phone-menu");
//const plus = document.getElementById("plus");
//const plus = document.querySelectorAll("phone");;

plus.addEventListener("click", function opennav() {
    header.classList.toggle("open");
    phone_ul.classList.toggle("open");
    //phone_products.classList.toggle("open");
});