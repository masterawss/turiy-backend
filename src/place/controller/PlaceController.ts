import { NextFunction, Request, Response } from 'express';
import placeModel from '../entity/models/placeModel';
import publicationsModel from '../../publications/entity/models/publicationsModel'

export default class PlaceController {
    find = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.placeId;
        const publications = await publicationsModel.find({placeId: id });
        const place = await placeModel
                        .findById(id)
                        .populate("guides")
        
        console.log('id', id)
        console.log(publications)
        console.log(place)
        res.json({place, publications})
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







