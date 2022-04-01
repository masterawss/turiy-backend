import { NextFunction, Request, Response } from 'express';
import User from '../entity/models/UserModel';
import reviewsModel from '../../reviews/entity/models/ReviewsModel'

export default class UserController {
    find = async (req: Request, res: Response, next: NextFunction) => {
        const reviews = await reviewsModel.find({userId: req.params.userId })
        const user = await User
            .findById(req.params.userId)
        res.json({user,reviews})
    };

    // PARA CREAR DESDE POSTMAN
    // create = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         let place = await UserModel.create(req.body)
    //         res.send(place)
    //     } catch (error) {
    //         console.log('ERROR BIEN FEO');
    //         res.status(500).send(error)
    //     }
    // }

    // // PUT: /products/:productId
    // update = async (req: Request, res: Response, next: NextFunction) => {};

    // // DELETE: /products/:productId
    // delete = async (req: Request, res: Response, next: NextFunction) => {};

}
