import 'dotenv/config';

import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';

const app = Express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(Cors())
app.use(Helmet())
