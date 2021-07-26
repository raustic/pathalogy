import { Body, Controller, Post } from '@nestjs/common';
import { RegisterPathorHospService } from '../register-pathor-hosp.service';
import { RegisterPathorHospital } from '../RegisterPathorHospital.entity';

@Controller('register-hospital')
export class RegisterHospitalController {
    constructor(private _regHosp:RegisterPathorHospService){

    }
    @Post('RegisterHospital')
    async RegisterHospital(@Body()model:RegisterPathorHospital):Promise<any>
    {
        var _msg=this._regHosp.RegisterHospital(model);
        return _msg;
    }
}
