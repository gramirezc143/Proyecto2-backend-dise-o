import { resolve } from 'dns';

import { rejects } from 'assert';

import jwt from 'jsonwebtoken';

import { Usuario } from '../models/usuario.model';


export default class Token {

    private static seed: string = 'este-es-el-seed-de-mi-app-secreto';
    private static caducidad: string = '30d';

    constructor() {}


// clase para generar token
    static getJwtToken( payload: any ): string {

        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad});
    }


//metodo para comparar token que regresan una promesa
    static comprobarToken( userToken: string){
        return new Promise( (resolve, reject ) => {

            jwt.verify( userToken, this.seed, ( err, decoded ) => {
            

                if ( err ) {
                    // no confiar
                    reject();
                } else {
                    // token valido
                    resolve( decoded );
                }
    
    
            })

        });

        
    }


}