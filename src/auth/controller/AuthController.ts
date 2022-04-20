import { LoginUser } from 'auth/types';
import { NextFunction, Request, Response } from 'express';
import UserModel from '../../user/entity/models/UserModel';
import {createAuthToken} from '../utils/TokenManager';
import  mercadopago from 'mercadopago';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'vittest', 
  api_key: '864198498814525', 
  api_secret: 'vT-ffxcPzr5eWO3EivluvD-Thyg' 
});


dotenv.config();



sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

const msg = {
  to: 'leftmine05@gmail.com',
  from: 'natalicontrerasluna@vitplanet.com', // Use the email address or domain you verified above
  subject: 'Notificacion de Turiy',
  text: 'Bienbenido a Turiy',
  html: '<h1>Somos Turiy</h1><strong>Tenemos mucho por ver</strong>',
};

export const sendEmail = async (correo_usuario: string) => {

  msg.to=correo_usuario;
  try {
    await sgMail.send(msg);
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};



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

export const registerGuide = async(req: Request, res: Response) => {


  const usuario=req.body;
  const envio_correo="leftmine05@gmail.com";

  console.log(req.body);

 // console.log("body d"+JSON.stringify(usuario.form.doc));

  
  // upload image here
 // cloudinary.uploader.upload(data.image);

 /*
  try {
    const fileStr = usuario.form.doc.toString('utf8');
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {});
    console.log(uploadResponse);
    res.json({ msg: 'yaya' });
    return;
} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
    return;
}
*/

 
}
