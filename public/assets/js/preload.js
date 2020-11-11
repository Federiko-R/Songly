document.addEventListener("DOMContentLoaded", () => {
      const async = document.createElement('script'); async.async = true;
      const defer = document.createElement('script'); defer.defer = true;
      window.matchMedia("(orientation: portrait)").matches ?
            (async.src = '/assets/js/mobile/async.js', defer.src = '/assets/js/mobile/defer.js') :
            (async.src = '/assets/js/desktop/async.js', defer.src = '/assets/js/desktop/defer.js')
            document.head.appendChild(async);
            document.head.appendChild(defer)});