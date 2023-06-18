let bars = document.querySelector('#bars'),
    close = document.querySelector('#close'),
    headerBarsNav = document.querySelector('.header-bars-nav')

    bars.addEventListener("click" , ()=>{
        headerBarsNav.style.display = 'block';
    });
    close.addEventListener("click" , ()=>{
        headerBarsNav.style.display = 'none';
    });