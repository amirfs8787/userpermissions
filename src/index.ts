import 'dotenv/config';
import express from 'express';
import { rolesRouter } from './routes/roles';
import jwt from 'jsonwebtoken';
import { connect } from 'mongoose';
const app = express();

const { PORT = '3000', JWT_SECRET, MONGO_CONNECTION_STRING } = process.env;

const authenticateToken = (req: any, res: any, next: any) => {

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }
  try {
    req.user = jwt.verify(token, JWT_SECRET!);
    next()
  } catch (err) {
    res.status(401).send('Invalid Signature');

    return;
  }
}

app.use(express.json());

app.use(authenticateToken);

app.use('/roles', rolesRouter);

const connectAndStartServer = async () => {
  await connect(MONGO_CONNECTION_STRING!);
  app.listen(parseInt(PORT));
  console.log(`The application is up and listening on port ${PORT}`);
}

connectAndStartServer();