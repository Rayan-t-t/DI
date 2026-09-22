import { Service } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class Servicio {
    private users: Usuario[] = [
        {id:1,name:'Rayan',email:'rayan@gamil.com',activo:true},
        {id:2,name:'Jacinto',email:'jacinto@gamil.com',activo:true}
    ];
    async getUsuarios(): Promise<Usuario[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.users), 1000);
        });
    }
}