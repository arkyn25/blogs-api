const express = require('express');
const userRoute = require('./routes/userRoutes');
const loginRoute = require('./routes/loginRoutes');
const categories = require('./routes/categoryRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/categories', categories);

app.use((err, _req, res, _next) => {
  if (!err.status) console.log(err);
  res.status(err.status).json({ message: err.message });
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
