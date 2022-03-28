import { NextFunction, Request, Response } from 'express';
import publicationsModel from '../entity/models/publicationsModel';

export default class PublicationsController {
    find = async (req: Request, res: Response, next: NextFunction) => {
        const publications = await publicationsModel
                        .find({})
        res.json(publications)
    };

    // // PUT: /products/:productId
    // update = async (req: Request, res: Response, next: NextFunction) => {};

    // // DELETE: /products/:productId
    // delete = async (req: Request, res: Response, next: NextFunction) => {};

}
