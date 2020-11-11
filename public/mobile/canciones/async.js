const button = document.querySelector('footer div');
    button.addEventListener('click', () => {
        const footer = document.querySelector('footer');
        if (footer.style.width === '300px') {
            footer.style.width = '120px';
        } else {
            footer.style.width = '300px';
        }
    });