import { NextFunction, Request, Response } from 'express';
import Place from '../entity/models/placeModel'

export default class PlaceController {
    // GET: /products
    index = async (req: Request, res: Response, next: NextFunction) => {};

    // GET: /products/:productId
    find = async (req: Request, res: Response, next: NextFunction) => {};

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let place = await Place.create(req.body)
            res.send(place)
        } catch (error) {
            console.log('ERROR BIEN FEO');
            res.status(500).send(error)
        }
    }

    // PUT: /products/:productId
    update = async (req: Request, res: Response, next: NextFunction) => {};

    // DELETE: /products/:productId
    delete = async (req: Request, res: Response, next: NextFunction) => {};

}