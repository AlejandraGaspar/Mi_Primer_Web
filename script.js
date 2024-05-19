var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BTS')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Grupo Surcoreano')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Impacto Global!</strong>')
    .pauseFor(1500)
    .start();