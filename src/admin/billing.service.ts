import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { billing } from 'src/admin/billing.entity';
import {Repository} from 'typeorm';

@Injectable()
export class BillingService {
    
    constructor(@InjectRepository(billing)private billingRepo:Repository<billing>) {
        

    }
}
