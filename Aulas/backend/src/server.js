const app = require('./app');

const port = 3333;

app.listen(port, () => {
  console.log("Servidor ON: Use Ctrl + click para acessar em: http://localhost:" + port);
});