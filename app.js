const express = require('express');
const app = express();

// Setting up server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Routes
const MainRoutes = require('./routes/main');
const HeroesRoutes = require('./routes/heroes');


app.use(MainRoutes);
app.use(HeroesRoutes);