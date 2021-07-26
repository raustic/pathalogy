import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ok } from 'assert';
import { createConnection, getManager, Repository } from 'typeorm';
import { receiveMessageOnPort } from 'worker_threads';
import { billing } from '../billing.entity';
import { diagnosis } from '../diagnosis.entity';
import { patient } from '../patient.entity';
import { RegisterPathorHospital } from '../RegisterPathorHospital.entity';
import { user } from '../user.entity';



@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(user)private userRepo:Repository<user>,
        @InjectRepository(billing)private billingRepo:Repository<billing>,
        @InjectRepository(diagnosis)private diagnoseRepo:Repository<diagnosis>,
        @InjectRepository(patient)private patientRepo:Repository<patient>,
        @InjectRepository(RegisterPathorHospital)private RegisterHosp:Repository<RegisterPathorHospital>)
    {

    }
  



}
