import {TOKEN_SECRET} from '../esquema/config.js';
import jwt from 'jsonwebtoken';

export function createAccessToken(payload){
   return new Promise((resolve, reject)=>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
            expiresIn:"5h",
            },
            (err,token)=>{
                if (err) reject(err);
                resolve(token)
            }
        );
    })

}