import { NextFunction, Request, Response } from 'express';

const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
  console.log('REQ', req.body);
  
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err: any) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

  export default validate;