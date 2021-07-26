import { Repository } from 'typeorm';
import { diagnosis } from 'src/admin/diagnosis.entity';
export declare class DiagnosisService {
    private _diagnoseRepo;
    constructor(_diagnoseRepo: Repository<diagnosis>);
}
