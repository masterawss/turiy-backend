import { NextFunction, Request, Response } from 'express';
import reviewModel from '../entity/models/reviewModel';

export default class ReviewController {
    // GET: /place
    index = async (req: Request, res: Response, next: NextFunction) => {
        //Obtener el id
        const placeId = req.params.placeId;
        const reviews = await reviewModel.find({_id: "620c6b4191bdec2ec4e7d8d7"});
        res.send(reviews);
    };

    // GET: /places/:placeId
    find = async (req: Request, res: Response, next: NextFunction) => {};

    create = async (req: Request, res: Response, next: NextFunction) => {}

    // PUT: /products/:productId
    update = async (req: Request, res: Response, next: NextFunction) => {};

    // DELETE: /products/:productId
    delete = async (req: Request, res: Response, next: NextFunction) => {};

}