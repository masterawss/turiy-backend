import { Router } from 'express';
import RouteGroup from 'express-route-grouping';
import PlaceController from './place/controller/PlaceController'
import PublicationsController from './publications/controller/PublicationsController'

import GuideController from './guide/controller/GuideController'
import * as AuthController from './auth/controller/AuthController'
import * as HomeController from './home/controller/HomeController'
import authMiddleware from './shared/middleware/authMiddleware';
import requestValidator from './shared/middleware/requestValidatorMiddleware';
import * as AuthSchema from './auth/Request/AuthSchema'
import UserController from './user/controller/UserController';
import ReviewsController from './reviews/controller/ReviewsController';

const root = new RouteGroup('/', Router());

root.group('/', route => {

    // ANTHONY WILL
    route.group('/auth', auth => {
        auth.post('/login', requestValidator(AuthSchema.loginSchema), AuthController.login )
        auth.post('/register',  AuthController.register )
        auth.get('/user', authMiddleware, AuthController.getUser )

        auth.post('/register-guide', authMiddleware, AuthController.registerGuide)
    })

    route.group('/home',  home => {
        home.post('/get-nearby-places', authMiddleware, HomeController.getNearbyPlace )
    })

    // MADAY - PEDRO
    route.group('/places', place => {
        place.resource({handlers: new PlaceController()})
        //Publication
    })   

    route.group('/publications', publications => {
        console.log('hace la peticion get')
        publications.resource({handlers: new PublicationsController()})
        //Publication
    }) 
    // USER - GUIA -> MADAY - JULIO
    route.group('/users', user => {
        user.resource({handlers: new UserController()})
    })
    route.group('/reviews', review => {
        review.resource({handlers: new ReviewsController(), beforeHandlers: [authMiddleware]})
    })

})



export default root.export()