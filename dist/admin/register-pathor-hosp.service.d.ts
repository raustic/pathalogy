import { RegisterPathorHospital } from 'src/admin/RegisterPathorHospital.entity';
import { Repository } from 'typeorm';
export declare class RegisterPathorHospService {
    private _regPathOrHosp;
    constructor(_regPathOrHosp: Repository<RegisterPathorHospital>);
    RegisterHospital(model: RegisterPathorHospital): Promise<any>;
    UpdateHospital(model: RegisterPathorHospital): Promise<any>;
}
