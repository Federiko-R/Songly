window.onload = function load() {
    var Loader = document.getElementById('loader');
    Loader.style.opacity = '0';
};

(function () {
    if (window.matchMedia("(orientation: portrait)").matches) {
    window.location.replace('/mobile/')        
    }
})();