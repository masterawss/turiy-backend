import { LoginUser } from 'auth/types';
import { NextFunction, Request, Response } from 'express';
import UserModel from '../../user/entity/models/UserModel';
import {createAuthToken} from '../utils/TokenManager';
import  mercadopago from 'mercadopago';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
var cloudinary = require('cloudinary').v2;
dotenv.config();



sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

const msg = {
  to: 'maday.choque@gmail.com',
  from: 'maday.choque@gmail.com', // Use the email address or domain you verified above
  subject: 'Notificacion de Turiy',
  text: 'Bienvenido a Turiy',
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


  const usuario=req.body.email;
  

  console.log(req.body);


  try {
  //  var main = await sendEmail(usuario.form.email); //Neo
  var main = await sendEmail(usuario); //Neo
   
  } catch (err) {
    
  }

  const user = await UserModel.findOne({email: req.body.email});
    mercadopago.configure({
      access_token: process.env.MP_ACCESS_TOKEN!,
    });

    // Crea un objeto de preferencia
    let preference = {
      items: [
        {
          title: "Suscripción Turiy - Guide",
          unit_price: 40,
          quantity: 1,
        },
      ],
     payer: {
      name:`${usuario}`,
      //email: `${envio_correo}`,
      email:`${usuario}`,
     },
      back_urls: {
        success: process.env.WEB_URL+'/checkout-success',
        failure: process.env.WEB_URL+'/checkout-failure',
        pending: process.env.WEB_URL+'/checkout-pending'
      },
  };

    mercadopago.preferences
      .create(preference)
      .then(function (response:any) {
        console.log('RESPUESTA DE MERCADO PAGO', response);
        res.json(response.response.init_point);
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      })
      .catch(function (error:any) {
        console.log(error);
      });
}
