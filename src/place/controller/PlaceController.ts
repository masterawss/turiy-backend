import { NextFunction, Request, Response } from 'express';
import Place from '../entity/models/placeModel'

export default class PlaceController {
    // GET: /place
    index = async (req: Request, res: Response, next: NextFunction) => {
        
    };

    // GET: /places/:placeId
    find = async (req: Request, res: Response, next: NextFunction) => {
        //Retornar el Json de 1 sólo idPlace

        //Obtener el id
        const pladeId = req.params.placeId;
        //Buscar en la BD segun id
        const place = await Place.findById(pladeId);
        res.json(place)

    };

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