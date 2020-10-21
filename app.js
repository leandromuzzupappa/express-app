const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//Helper
const getAbsolutePath = filepath => path.join(__dirname, filepath);

// Setting up server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//
const heroesJSON = fs.readFileSync(getAbsolutePath('./data/heroes.json'), { encoding: 'utf-8' });
const heroes = JSON.parse(heroesJSON);

// Routes
const MainRoutes = require('./routes/main');

app.get('/heroes', (req, res) => {
    res.send(heroes)
});

app.get('/heroes/detalle/:id', (req, res) => {
    const id = req.params.id;
    const heroe = heroes.find( heroe => heroe.id == parseInt(id) );

    if (heroe !== undefined) {
        res.send(`Hola, mi nombre es <strong>${heroe.nombre}</strong> y soy <strong>${heroe.profesion}</strong>`);
    } else {
        res.send('No se encontro al heroe');
    }

});

app.get('/heroes/bio/:id/:ok?', (req, res) => {
    const { id, ok } = req.params;
    const heroe = heroes.find( heroe => heroe.id == parseInt(id) );

    if( heroe && ok === 'ok' ) {
        res.send(`<h1 style="margin-bottom:0">${heroe.nombre}:</h1> <br> ${heroe.resenia}`)
    } else if ( heroe && ok !== 'ok') {
        res.send(`${heroe.nombre} dice "Lamento que no desees saber más de mi :("`)
    } else {
        res.send('No encontramos un héroe para mostrarte su biografía');
    }
});

app.use(MainRoutes);