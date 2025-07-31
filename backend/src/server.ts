import express from 'express';
import dotenv from 'dotenv';
import { connect } from './db';
import usersRouter from './routes/users';
import clientsRouter from './routes/clients';
import performanceRouter from './routes/performanceData';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/performance-data', performanceRouter);

const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/app';

connect(mongoUri).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to DB', err);
});
