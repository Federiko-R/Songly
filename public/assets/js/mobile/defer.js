// Open chord images
    const chords = document.querySelectorAll('header i');
    const container = document.getElementById('drop');
    popUp = (e) => {
        var data = e.target.dataset.image;
        container.style.display = 'block';
        container.style.backgroundImage = `url(/assets/chords/${data}.png)`;
        container.addEventListener('click', () => {})
    }
    for (var i of chords) { i.addEventListener('click', popUp) }

// Close chord div
    const body = document.body;
    window.addEventListener('scroll', () => container.style.display = 'none')
    window.addEventListener('click', (e) => {if (!header.contains(e.target)) {container.style.display = 'none'}});
    body.addEventListener('scroll', () => container.style.display = 'none') // For Safari
    body.addEventListener('click', (e) => {if (!header.contains(e.target)) {container.style.display = 'none'}}); // For Safari

// About Us 
    const svg = document.querySelector('nav button svg');
    const svgPath = document.querySelector('nav button svg path');
    const subtitle = document.querySelector('h2')
    var dbClicked = false;
    button.addEventListener('click', e => e.preventDefault())
    button.addEventListener('click', () => {
        if (dbClicked) {
            button.classList.add('about');
            svg.addEventListener('click', () => button.classList.remove('about'));
            svgPath.setAttribute('d', 'M2 2L6 6M2 6L6 2M2 2L6 6');
            header.style.display = 'none';
            subtitle.style.opacity = '0';
        }
        else {
            header.style.display = 'flex';
            subtitle.style.opacity = '1'
            svgPath.setAttribute('d', 'M1 2L7 2M1 4L7 4M1 6L7 6');
        }
        dbClicked = true;   setTimeout(() => dbClicked = false, 300);
    });