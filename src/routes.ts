import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
import PlaceController from './place/controller/PlaceController'
import GuideController from './guide/controller/GuideController'
import * as HomeController from './home/controller/HomeController'
import ReviewController from './place/controller/ReviewController';
const root = new RouteGroup('/', Router());

root.group('/', route => {
    
    // ANTHONY WILL
    route.group('/home', home => {
        home.post('/get-nearby-places', HomeController.getNearbyPlace )
    })

    // MADAY - PEDRO
    route.group('/places', place => {
        place.resource({handlers: new PlaceController()})
        //Publication             
    })

    // /places/review
    //Review
    route.group('/reviews', review => {
        review.resource({handlers: new ReviewController()})
    })
    
    // USER - GUIA -> MADAY - JULIO
    route.group('/guides', place => {
        place.resource({handlers: new GuideController()})
    })
})



export default root.export()