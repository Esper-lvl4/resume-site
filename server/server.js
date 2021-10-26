const express = require('express');
const jwt = require('express-jwt');

const app = express();
const port = 8000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get(
  '/admin',
  jwt({
    secret: 'some-secret',
    algorithms: ['HS256'],
  }),
  (req, res) => {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  },
);

app.use('/files', express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});