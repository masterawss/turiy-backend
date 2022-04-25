import { NextFunction, Request, Response } from 'express';
import placeModel from '../entity/models/placeModel';
import ReviewsModel from '../../reviews/entity/models/ReviewsModel';

export default class PlaceController {
    find = async (req: Request, res: Response, next: NextFunction) => {

        const user:any = req.user

        const id = req.params.placeId;
        const reviews = await ReviewsModel.find({place: id }).populate('user');
        const place = await placeModel
                        .findById(id)
                        .populate("guides")
        const isAlreadyVisited = await ReviewsModel.findOne({user: user._id, place: id})
        res.json({place, reviews, isAlreadyVisited: !!isAlreadyVisited})
    };

    // findPublicaions = async (req: Request, res: Response, next: NextFunction) => {

    //     const publications = await publicationsModel
    //                             .find({});
    //     res.send(publications)
    // };
    // PARA CREAR DESDE POSTMAN
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let place = await placeModel.create(req.body)
            res.send(place)
        } catch (error) {
            console.log('ERROR BIEN FEO');
            res.status(500).send(error)
        }
    }

    // // PUT: /products/:productId
    // update = async (req: Request, res: Response, next: NextFunction) => {};

    // // DELETE: /products/:productId
    // delete = async (req: Request, res: Response, next: NextFunction) => {};

}

export const obtenerTodos = async (req: Request, res: Response, next: NextFunction) => {
    const places = await placeModel.find({})
    res.send(places)
};







