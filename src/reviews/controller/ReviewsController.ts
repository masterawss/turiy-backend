import { NextFunction, Request, Response } from 'express';
import UserModel from '../../user/entity/models/UserModel';
import reviewsModel from '../entity/models/ReviewsModel';

export default class ReviewsController {
    create = async (req: Request, res: Response, next: NextFunction) => {

        const user:any = req.user;

        if(user){
            try {
                console.log('DATA', req.body);

                const review = await reviewsModel.create({
                    ...req.body,
                    user: user._id
                });

                const data = await reviewsModel.findById(review._id).populate('user')
                // const guide = UserModel.updateOne({_id: req.body.guide}, {$push: {reviews: review._id}});
                res.send({ message: 'Se registró correctamente', data });
            } catch (error) {
                res.status(500).send('Ha ocurrido un error')
            }
        }else{
            res.status(403).send('No se pudo obtener el usuario')
        }
    };
}