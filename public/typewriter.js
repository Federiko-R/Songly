var app = document.getElementById('write');

var typewriter = new Typewriter(app, {
    loop: true,
    autoStart: true,
});

typewriter.typeString('<span class="chord">|C|</span> Yo soy lo que <span class="chord">|G|</span> soy <br> no soy lo que <span class="chord">|A|</span>')
                  .pauseFor(500)
                  .deleteChars(3)
                  .typeString('<span class="chord">|Am|</span> ves')
                  .pauseFor(1000)
                  .start()

                  new Typewriter('#typewriter', {
                    strings: ['Hello', 'World'],
                    autoStart: true,
                  });
