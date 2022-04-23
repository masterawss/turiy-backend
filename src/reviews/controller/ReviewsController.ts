import { NextFunction, Request, Response } from 'express';
import UserModel from '../../user/entity/models/UserModel';
import reviewsModel from '../entity/models/ReviewsModel';

export default class ReviewsController {
    create = async (req: Request, res: Response, next: NextFunction) => {

        const user:any = req.user;

        if(user){
            try {
                const review = await reviewsModel.create({
                    ...req.body,
                    user: user._id
                });
                const guide = UserModel.updateOne({_id: req.body.guide}, {$push: {reviews: review._id}});
                res.send('review created')
            } catch (error) {
                res.status(500).send('Ha ocurrido un error')
            }
        }else{
            res.status(403).send('No se pudo obtener el usuario')
        }
    };
}






