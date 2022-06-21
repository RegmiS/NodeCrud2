import 'dotenv/config';
import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import Morgan from 'morgan';
import Mongoose from 'mongoose';

const limiter = RateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: true,
    legacyHeaders: false, 
});

const app = Express();

app.use(Cors());
app.use(Helmet());
app.use(Morgan('tiny'));
app.use(Express.json());
app.use(limiter);

Mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log('Connected to mongo db'))
.catch((err) => console.log(`Could not connect to MongoDB...${err}`));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));