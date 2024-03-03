
import 'bootstrap/dist/css/bootstrap.rtl.css';
require('bootstrap/dist/js/bootstrap.bundle');


import "@fortawesome/fontawesome-free/js/all.min";
import "./css/style.css";
import './sass/style.scss'
// import "jquery/dist/jquery.js";



function scrollFnuction()
{
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('navbar').classList.add('noTransparrent');
    } else {
        document.getElementById('navbar').classList.remove('noTransparrent');
    }
};