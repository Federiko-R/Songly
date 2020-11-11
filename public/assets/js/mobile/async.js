// Open Menu
    const nav = document.querySelector('nav');
    const button = document.querySelector('nav button');
    button.addEventListener("click", () => nav.classList.toggle("open"));

// Hide header
    const header = document.querySelector('header');
    var position = window.pageYOffset;
    window.addEventListener('scroll', () => {
        var scroll = window.pageYOffset;
        if (scroll > position) { header.style.top = '-120px' }
        else { header.style.top = '30px' }
        position = scroll;
    });
    const body = document.body; 
    var sPosition = body.scrollTop 
    body.addEventListener('scroll', () => {
        var sScroll = body.scrollTop; 
        if (sScroll > sPosition) { header.style.top = '-120px' } 
        else { header.style.top = '30px' }
        sPosition = sScroll; 
    });