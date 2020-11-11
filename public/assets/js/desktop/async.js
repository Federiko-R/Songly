// Fade Header
    const header = document.querySelector('header');
    const drop = document.getElementById('drop');
    const eye = document.getElementById('eye');
    drop.addEventListener('click', () => {
        header.classList.toggle('hidden');
        eye.classList.add('fade');
        setTimeout((h = header.classList.contains('hidden')) => {
            h? eye.src = "/assets/icons/eye-off.svg" : eye.src = "/assets/icons/eye.svg";
            eye.classList.remove("fade");
        }, 300)});
    
// Open header 
    const pool = document.getElementById('pool');
    const ii = document.querySelectorAll('header i');
    const gr = 'linear-gradient(to right, var(--orange), var(--red), var(--magenta))';
    for (var i of ii) {
        i.addEventListener('mouseover', (e, d = e.target.dataset.image) => {
            pool.style.backgroundImage = `url(/assets/chords/${d}.png), ${gr}`;
            e.target.addEventListener('click', (p = pool.style.backgroundImage) => {
                p = `url(/assets/chords/${d}.png), ${gr}`? 
                p = `url(/assets/chords/${d + '-1'}.png), ${gr}`:
                p = `url(/assets/chords/${d + '-1'}.png), ${gr}`?
                p = `url(/assets/chords/${d + '-2'}.png), ${gr}`:
                p = `url(/assets/chords/${d}.png), ${gr}`
            })
        })
        i.addEventListener('mouseout', () => pool.style.backgroundImage = gr)}