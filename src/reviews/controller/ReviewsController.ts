import { NextFunction, Request, Response } from 'express';
import reviewsModel from '../entity/models/ReviewsModel';

export default class ReviewsController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        const review = await reviewsModel.create(req.body);
        res.send('review created')      
    };

}






