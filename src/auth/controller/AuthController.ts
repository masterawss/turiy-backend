import { LoginUser } from 'auth/types';
import { NextFunction, Request, Response } from 'express';
import UserModel from '../../user/entity/models/UserModel';
import {createAuthToken} from '../utils/TokenManager';

export const login = async (req: Request, res: Response) => { 
    // VALIDAR USUARIO POR EMAIL
    const user = await UserModel.findOne({email: req.body.email});
    if(!user)  return res.status(401).json({message: 'Email o contraseña incorrecta'})

    // VALIDAR USUARIO POR PASSWORD
    const is_valid_password = await user.isValidPassword(req.body.password)
    if(!is_valid_password) {
        console.log('USUARIO', is_valid_password);
        return res.status(401).json({message: 'Email o contraseña incorrecta'})
    }

    // GENERAR TOKEN
    const token = createAuthToken({id: user.id})
    res.status(200).json({
        token
    })
}

export const register = async (req: Request, res: Response) => {
    // VALIDAR QUE NO EXISTE EL EMAIL
    const user_exist = await UserModel.findOne({email: req.body.email})
    if(user_exist) 
        return res.status(401).send({message: 'Ya existe un usuario con este email'})

    // REGISTRAR EL USUARIO    
    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    console.log('USUARIO REGISTRADO', user);
    
    // GENERAR TOKEN
    const token = createAuthToken({id: user.id})
    res.status(200).json({
        token
    })
}

export const getUser = async(req: Request, res: Response) => {
    res.json({user: req.user})
}