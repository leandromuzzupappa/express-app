const MainControllers = {
    home: (req, res) => {
        res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
    },
    creditos: (req, res) => {
        const emojis = ["🌵", "🛌", "🌎", "🍄", "👾"];
        const emoji = emojis[Math.floor( Math.random() * emojis.length )];
        
        res.send(`Leandro Muzzupappa @ ${emoji}`);
    },

}

module.exports = MainControllers;