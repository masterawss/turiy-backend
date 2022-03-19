import { NextFunction, Request, Response } from 'express';
import placeModel from '../entity/models/placeModel';
import Place from '../entity/models/placeModel'

export default class PlaceController {
    find = async (req: Request, res: Response, next: NextFunction) => {
        const place = await placeModel
                        .findById(req.params.placeId)
                        .populate("guides")

        res.send(place)
    };

    // PARA CREAR DESDE POSTMAN
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let place = await Place.create(req.body)
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