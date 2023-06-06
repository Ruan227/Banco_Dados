const express = require('express');
const app = express();
app.get("/", async (req, res) => {
res.send("pagina Inicial");
});
app.listen(8080,() => {
	console.log('deu certo')
});
