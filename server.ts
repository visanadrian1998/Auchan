import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import jwt from 'jsonwebtoken';
import session from 'express-session';
declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

import router from './routes.ts'

const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: false,
  })
);

app.use(
    session({
      secret: "Auchan!@1",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});