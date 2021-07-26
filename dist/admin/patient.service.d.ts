import { patient } from 'src/admin/patient.entity';
import { Repository } from 'typeorm';
export declare class PatientService {
    private _patientRepo;
    constructor(_patientRepo: Repository<patient>);
}
