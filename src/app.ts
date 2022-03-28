import express, {
    Application,
    NextFunction,
    Request,
    Response,
    ErrorRequestHandler,
  } from 'express';

  import dotenv from 'dotenv';

  import routes from './routes'

  import cors from 'cors'
  import {corsConfig} from './corsConfig'

  dotenv.config();
  
  const app: Application = express();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use(cors(corsConfig))
  
  app.use('/', routes);
  
  // app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  //   // console.error(err.message)
  //   console.log(err.statusCode);
  
  //   res
  //     .status(err.statusCode ? err.statusCode : 500)
  //     .send({ message: err.message, type: err.errorType });
  // });

  
  export default app;