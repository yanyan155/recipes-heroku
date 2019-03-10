const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
   res.send('index.html');
   /*res.send('hello');*/
})
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message); 
});
let port = process.env.PORT || 8080;
const server = app.listen(port, "0.0.0.0", function () {
   const host = server.address().address;
   const port = server.address().port;
   console.log(`Example app listening at http://127.0.0.1:8080/`);
})
