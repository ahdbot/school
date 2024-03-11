
import 'bootstrap/dist/css/bootstrap.rtl.css';
require('bootstrap/dist/js/bootstrap.bundle');
import "@fortawesome/fontawesome-free/js/all.min";
import '../sass/style.scss'
import '../sass/register.scss'
import '../sass/login.scss'
import '../sass/student.scss'
// import "jquery/dist/jquery.js";


import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';


import { CountUp } from 'countup.js';




const changeSlideView = (slide) => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: slide,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}

changeSlideView();




// handleOrientationChange();

// mql.onchange = (e) => {
//     handleOrientationChange(e);
// }


// function scrollFnuction() {
//     if (document.documentElement.scrollTop > 200) {
//         document.getElementById('navbar').classList.add('noTransparrent');
//     } else {
//         document.getElementById('navbar').classList.remove('noTransparrent');
//     }
// };




// $(window).scroll(function () {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });

// btn.on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, '300');
// });


window.onload = function () {
    var countUp = new CountUp('website-count', 20);
    countUp.start();
    var countUp1 = new CountUp('app-count', 100);
    countUp1.start();
    var countUp2 = new CountUp('user-count', 700);
    countUp2.start();
}

document.getElementById("year").innerHTML = "جميع الحقوق محفوظة  سنة " + new Date().getFullYear();