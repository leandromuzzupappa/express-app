const express = require('express');
const app = express();

const PORT = 12334

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});