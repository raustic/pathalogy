import { Module } from '@nestjs/common';
import { AdminService } from './admin/admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { billing } from './billing.entity';
import { diagnosis } from './diagnosis.entity';
import { patient } from './patient.entity';
import { RegisterPathorHospital } from './RegisterPathorHospital.entity';
import { BillingService } from './billing.service';
import { userService } from './user.service';
import { DiagnosisService } from './diagnosis.service';
import { PatientService } from './patient.service';
import { RegisterPathorHospService } from './register-pathor-hosp.service';
import { RegisterHospitalController } from './register-hospital/register-hospital.controller';

@Module({
  imports:[TypeOrmModule.forFeature([user,billing,diagnosis,patient,RegisterPathorHospital])],
  providers: [BillingService,userService,DiagnosisService,PatientService,RegisterPathorHospService,AdminService],
  controllers: [AdminController, RegisterHospitalController]
})
export class AdminModule {}
