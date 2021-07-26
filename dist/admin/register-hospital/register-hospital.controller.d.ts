import { RegisterPathorHospService } from '../register-pathor-hosp.service';
import { RegisterPathorHospital } from '../RegisterPathorHospital.entity';
export declare class RegisterHospitalController {
    private _regHosp;
    constructor(_regHosp: RegisterPathorHospService);
    RegisterHospital(model: RegisterPathorHospital): Promise<any>;
}
