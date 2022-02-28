import * as dotenv from 'dotenv';
dotenv.config();

const domainsFromEnv = process.env.CORS_DOMAINS || ""

const whitelist = domainsFromEnv.split(",").map(item => item.trim())

export const corsConfig = {
  
  origin: function (origin: any, callback: any) {
    
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}