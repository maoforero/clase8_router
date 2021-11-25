let express = require('express');
const {Router} = express;

let app =  express();

const routerMascotas = new Router();
const routerPersonas = new Router();

const PORT = 8080;


routerMascotas.get('/', (req, res, next) => {
    res.send('ok mascotas');
});

routerPersonas.get('/', (req, res, next) => {
    res.send('ok personas');
});



app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

app.get('/', (req, res, next) => {
    res.send('home');
});

app.listen(PORT, () => {
    console.log("Hola mundo")
});