import { billing } from 'src/admin/billing.entity';
import { Repository } from 'typeorm';
export declare class BillingService {
    private billingRepo;
    constructor(billingRepo: Repository<billing>);
}
