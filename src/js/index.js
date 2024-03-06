
import 'bootstrap/dist/css/bootstrap.rtl.css';
require('bootstrap/dist/js/bootstrap.bundle');
import { CountUp } from 'countup.js';

import "@fortawesome/fontawesome-free/js/all.min";
import '../sass/style.scss'
import '../sass/register.scss'
import '../sass/login.scss'
import '../sass/student.scss'

// import "jquery/dist/jquery.js";



function scrollFnuction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('navbar').classList.add('noTransparrent');
    } else {
        document.getElementById('navbar').classList.remove('noTransparrent');
    }
};


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// scrollFnuction();


// window.onload = function () {
//     const countUp = new CountUp('targetId', 5234);
// if (!countUp.error) {
//   countUp.start();
// } else {
//   console.error(countUp.error);
// }
//     // let website = new CountUp('website-count', 0, 50, 0, 2.5);
//     // website.start();
//     // let app = new CountUp('app-count', 0, 100, 0, 2.5);
//     // app.start();
//     // let user = new CountUp('user-count', 0, 1000, 0, 2.5);
//     // user.start();
// };


const countUp = new CountUp('website-count', 50);
if (!countUp.error) {
    countUp.start();
} else {
    console.error(countUp.error);
}

const countUp1 = new CountUp('app-count', 100);
if (!countUp1.error) {
    countUp1.start();
} else {
    countUp1.error(countUp1.error);
}
const countUp2 = new CountUp('user-count', 700);
if (!countUp2.error) {
    countUp2.start();
} else {
    console.error(countUp2.error);
}


document.getElementById("year").innerHTML = "جميع الحقوق محفوظة  سنة " + new Date().getFullYear();