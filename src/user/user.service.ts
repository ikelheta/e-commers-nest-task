import { UserClass } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }

    addUser(user: any):Promise<User[]>{
        user = new UserClass(user)
        const newUser =  this.userRepo.create({...user})
        return this.userRepo.save(newUser)
    }
 //===============================================================================================================================================================================
    //===============================================================================================================================================================================
     getAll(): Promise<User[]> {
        return this.userRepo.find()
    }
    //===============================================================================================================================================================================
    //===============================================================================================================================================================================
    async getOne(id: number): Promise<User> {

        try {
            const  user =  this.userRepo.findOneOrFail({where: {id}})
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    }
    //===============================================================================================================================================================================
    //===============================================================================================================================================================================
    async deleteOne(id): Promise<any> {
        return await this.userRepo.delete({ id })
    }
    //===============================================================================================================================================================================
    //===============================================================================================================================================================================
    async updateOne(id, data): Promise<User> {
        const user = await this.getOne(id);
        user.email = data.email
        user.userName = data.userName
        user.password = data.password
        user.isadmin = data.isadmin
        user.seller = data.seller
        return this.userRepo.save(user)
    }
}
