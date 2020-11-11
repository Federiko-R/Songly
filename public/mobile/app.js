const App = document.getElementById('App')
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    App.addEventListener('click', (e) => {
        // Show the install prompt
        deferredPrompt.prompt();
    });
});

// App.addEventListener('click', navigator.registerProtocolHandler("web+songly", "https://songly-music.web.app/?songly=%s", "Songly App"))
// <a href="web+songly://songly-music.web.app/mobile">App</a>

