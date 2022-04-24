import { NextFunction, Request, Response } from 'express';
import ReviewsModel from '../../reviews/entity/models/ReviewsModel';
import Place from '../../place/entity/models/placeModel'

export const getNearbyPlace = async (req: Request, res: Response, next:NextFunction) => {
  
  const user:any = req.user

  let placesDb:any = await Place
     .find()
    // .where('coordinates.lat')
    //   .gt(+req.body.lat-1)
    //   .lt(+req.body.lat+1)
    // .where('coordinates.lng')
    //   .gt(+req.body.lng-1)
    //   .lt(+req.body.lng+1)
  let places = []
  for (let i = 0; i < placesDb.length; i++) {
    let isAlreadyVisited = await ReviewsModel.findOne({user: user._id, place: placesDb[i]._id})
    places.push({ ...placesDb[i].toObject(), isAlreadyVisited: !!isAlreadyVisited})
  }
  console.log("PLACES DATA", places[0]);
  
  res.send(places)
}