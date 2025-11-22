import express from 'express';
import path from 'path';

import { IS_DEVELOPMENT, SERVER_PORT } from '../env.ts';

const app = express();

app.get('/api/test', (_, res) => {
  res.status(200).json({ msg: 'test result' });
});

if (!IS_DEVELOPMENT) {
  const buildFolder = path.join(path.resolve(), '../frontend/build/client');
  app.use(express.static(buildFolder));

  app.get('/{*any}', (_, res) => {
    res.sendFile(`${buildFolder}/index.html`);
  });
}

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line
  console.info(`server running on ${SERVER_PORT}`);
});
