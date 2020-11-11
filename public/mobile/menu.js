const button = document.getElementById('menu');
button.addEventListener('click', () => {
    const footer = document.getElementById('footer');
    if (footer.style.width === '300px') {
        footer.style.width = '120px';
    } else {
        footer.style.width = '300px';
    }
});