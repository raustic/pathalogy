import { Repository } from 'typeorm';
import { billing } from '../billing.entity';
import { diagnosis } from '../diagnosis.entity';
import { patient } from '../patient.entity';
import { RegisterPathorHospital } from '../RegisterPathorHospital.entity';
import { user } from '../user.entity';
export declare class AdminService {
    private userRepo;
    private billingRepo;
    private diagnoseRepo;
    private patientRepo;
    private RegisterHosp;
    constructor(userRepo: Repository<user>, billingRepo: Repository<billing>, diagnoseRepo: Repository<diagnosis>, patientRepo: Repository<patient>, RegisterHosp: Repository<RegisterPathorHospital>);
}
