const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3000;

let level = 45.0;
app.use(cors()); //permite ser consultado desde cualquier pagina
app.use(express.urlencoded({ extended:false })); //bodyparser
app.use(express.json()); //permite leer json
//app.use(express.static( path.resolve( __dirname, './public' ))); //muestra el index html

app.get('/api/level', (req, res) => {
	res.json({level})
})

app.get('/api/setLevel', (req, res) => {
	level = req.level;
	res.json({ok: true, level});
})

app.listen(port, () => {
	console.log('Escuchando en el puerto', port);
});