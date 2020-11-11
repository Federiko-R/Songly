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

// Open chord images
    const chords = document.querySelectorAll('header i');
    const container = document.getElementById('drop');
    popUp = (e) => {
        var data = e.target.dataset.image;
        container.style.display = 'block';
        container.style.backgroundImage = `url(/assets/chords/${data}.png)`;
        container.addEventListener('click', () => {
            /* var images = [data, data + '-1', data + '-2'];
            for (x of images) {container.style.backgroundImage = `url(/assets/chords/${x}.png)`;} */
            /* if (container.style.backgroundImage = `url(/assets/chords/${data}.png)`) {
                container.style.backgroundImage = `url(/assets/chords/${data + '-1'}.png)`
            } else if (container.style.backgroundImage = `url(/assets/chords/${data + '-1'}.png)`) {
                container.style.backgroundImage = `url(/assets/chords/${data + '-2'}.png)`
            } else { container.style.backgroundImage = `url(/assets/chords/${data}.png)` } */
        })
    }
    for (var i of chords) { i.addEventListener('click', popUp) }

// Close chord div
    window.addEventListener('scroll', () => container.style.display = 'none')
    window.addEventListener('click', (e) => {if (!header.contains(e.target)) {container.style.display = 'none'}});
    body.addEventListener('scroll', () => container.style.display = 'none') // For Safari
    body.addEventListener('click', (e) => {if (!header.contains(e.target)) {container.style.display = 'none'}}); // For Safari
    
// About Us 
    const svg = document.querySelector('nav button svg');
    var dbClicked = false;
    button.addEventListener('click', () => {
        if (dbClicked) {
            button.classList.add('about');
            svg.addEventListener('click', () => button.classList.remove('about'));
            header.style.display = 'none';
        }
        else {header.style.display = 'flex'}
        dbClicked = true;   setTimeout(() => dbClicked = false, 300);
    });