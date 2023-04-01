//toggelclass aktif//
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu di klik
document.querySelector("#hamburger-menu") .onclik = () => {
  navbarNav.classList.toggle("active");
};

///luar sidebar//
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})