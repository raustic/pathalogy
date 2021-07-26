import { Injectable } from '@nestjs/common';
import { patient } from 'src/admin/patient.entity';
import{InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class PatientService {
    constructor(@InjectRepository(patient)private _patientRepo:Repository<patient>){

    }
}
