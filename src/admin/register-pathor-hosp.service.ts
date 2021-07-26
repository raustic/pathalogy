import { Injectable } from '@nestjs/common';
import { RegisterPathorHospital } from 'src/admin/RegisterPathorHospital.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm'

@Injectable()
export class RegisterPathorHospService {
    constructor(@InjectRepository(RegisterPathorHospital)private _regPathOrHosp:Repository<RegisterPathorHospital>){
    }

    async RegisterHospital(model:RegisterPathorHospital):Promise<any>
    {
        var _res={};
        try{
            var record=this._regPathOrHosp.findOne({where:{mobile:model.consultMobile}});
            if(record!=null)
            {
                _res={status:false,message:"User Already Exist try new One"}
                return _res;
            }
            model.CreatedAt=new Date();
            this._regPathOrHosp.create(model);
            this._regPathOrHosp.save(model);
            _res={
                status:true,
                message:"Registartion Made Successfully"
            };
        } 
        catch(e){
            _res={
                status:false,
                message:e.message
            };
        }

        return _res;

    }
    async UpdateHospital(model:RegisterPathorHospital):Promise<any>
    {
        var _res={};
        try{
            var record=await this._regPathOrHosp.findOne({where:{id:model.id}});
            if(record==null)
            {
                _res={
                    status:false,
                    message:"Record Not Found"
                };
            }
            record.UpdatedAt=new Date();
            this._regPathOrHosp.update(model.id,model);
            this._regPathOrHosp.save(model);
            _res={
                status:true ,
                message:"Record Updated Successfully"
            };

        }   
        catch(e)
        {
            _res={
                status:false,
                message:e.message
            };
        }  
        return _res;
    }


    

}
