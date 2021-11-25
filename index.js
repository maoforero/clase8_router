let express = require('express');
const {Router} = express;

let app =  express();

const routerMascotas = new Router();
const routerPersonas = new Router();

const PORT = 8080;

let path =  require('path');

let personas = ["homero", "bart", "moe"];
let mascotas = ["gato", "perro", "canario"];

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);
app.use('/formulario', express.static(path.join(__dirname, "public", "html")));


routerMascotas.get('/', (req, res, next) => {
    res.json(mascotas);
});

routerMascotas.post('/', (req, res, next) => {
    mascotas.push(req.query.nuevo);
    res.json(mascotas);
});

routerPersonas.get('/', (req, res, next) => {
    res.json(personas);
});

routerPersonas.post('/', (req, res, next) => {
    personas.push(req.query.nuevo);
    res.send(personas); 
})


app.get('/', (req, res, next) => {
    res.send('home');
});

app.listen(PORT, () => {
    console.log("Hola mundo")
});