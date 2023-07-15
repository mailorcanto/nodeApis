import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

import app from './app';

app.listen(PORT , ()=> console.log('Running port', PORT));