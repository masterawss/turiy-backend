import mongoose from 'mongoose';

export const createDbConnection = (dbURL: string) => {
  mongoose.connect(dbURL)
    .then(() => console.log('connected'))
    .catch((err) => console.log('error on connection', err));
  // mongoose.connection.on('error', () => console.log('Error on db connection'));
  // mongoose.connection.once('connected', () => console.log('db connected'));
}