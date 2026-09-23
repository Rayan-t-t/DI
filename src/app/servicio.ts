import { Injectable, Service } from '@angular/core';
import { User } from './usuario';
@Injectable({
    providedIn:'root'
})

export class Servicio {
    private users: User[] = [
        {id:1,name:'Rayan',email:'rayan@gamil.com',active:true},
        {id:2,name:'Jacinto',email:'jacinto@gamil.com',active:true},
        {id:3,name:'Jorge',email:'jorge@gamil.com',active:false}
    ];
    async getUsuarios(): Promise<User[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.users), 1000);
        });
    }
    async getUsuarioById(id: number): Promise<User | undefined> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.users.find(user => user.id === id)), 1000);
        });
    }
}