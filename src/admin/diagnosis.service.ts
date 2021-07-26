import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm'
import { diagnosis } from 'src/admin/diagnosis.entity';

@Injectable()
export class DiagnosisService {
    
    constructor(@InjectRepository(diagnosis)private _diagnoseRepo:Repository<diagnosis>) {
    
    }
}
