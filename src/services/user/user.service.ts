import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/entities/user.entity';
import { CreateDateColumn, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(user)private _userRepo:Repository<user>)
    {
        
    }
  async create(model:user):Promise<any>
    {

        var res={};
        try{
        if(this._userRepo.findOne({where:{mobile:model.mobile,isActive:1}})!=null)
        {

            res={
                status:false,
                message:"User Already Exist Try New One"
            };
        }
        model.CreatedAt=new Date();
        this._userRepo.create(model);
        this._userRepo.save(model);
        res={
            status:true,
            message:"User Created Successfully"
        };
        } 
        catch(e)
        {
            res={
                status:false,
                message:"Something went Wrong"
            };
        }

        return res;
        
    }
    

}
