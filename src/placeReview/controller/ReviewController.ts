import { NextFunction, Request, Response } from 'express';
import placeModel from '../entity/models/placeModel';

export default class PlaceController {
    // GET: /products
    index = async (req: Request, res: Response, next: NextFunction) => {
        
    };

    // GET: /products/:productId
    find = async (req: Request, res: Response, next: NextFunction) => {
        
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    // PUT: /products/:productId
    update = async (req: Request, res: Response, next: NextFunction) => {};

    // DELETE: /products/:productId
    delete = async (req: Request, res: Response, next: NextFunction) => {};

}