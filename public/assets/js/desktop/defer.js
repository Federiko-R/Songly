// About
    const nav = document.querySelector('nav');
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => nav.classList.toggle('about'))

// Strum
    const hh = document.getElementsByTagName('h4');
    const text = (e, p) => { e.target.style.color = 'transparent';
        setTimeout((t = e.target) => {t.innerHTML = p; t.style.color = 'white'}, 300)};
    for (var h of hh) {
        h.addEventListener('mouseover', (e, d = document.getElementById(`${e.target.dataset.strum}`)) =>
            text(e, d.innerHTML));
        h.addEventListener('mouseout', (e) => text(e, 'Rasguido'))};

// SVGs
    const ss = document.querySelectorAll('s');
    for (var s of ss) s.outerHTML = `<iframe src="/assets/icons/${s.innerHTML}.svg"></iframe>`;