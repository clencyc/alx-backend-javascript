import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
