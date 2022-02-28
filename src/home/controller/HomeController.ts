import { NextFunction, Request, Response } from 'express';
import Place from '../../place/entity/models/placeModel'

export const getNearbyPlace = async (req: Request, res: Response, next:NextFunction) => {
  
  let places = await Place
    .where('coordinates.lat')
      .gt(+req.body.lat-1)
      .lt(+req.body.lat+1)
    .where('coordinates.lng')
      .gt(+req.body.lng-1)
      .lt(+req.body.lng+1)
      
  res.send(places)
}