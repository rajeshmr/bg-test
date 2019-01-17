import express from 'express';
import * as Bull from 'bull';

const queue = Bull('reports');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
