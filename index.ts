import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './src';

dotenv.config();

const { MONGO_URI_DEV = '' } = process.env;

mongoose
  .connect(MONGO_URI_DEV,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  .then(() => {
    console.log('DB connected');
    return app();
  })
  .catch((er:any) => {
    console.log('failed to connect to mongoose', er);
  });
