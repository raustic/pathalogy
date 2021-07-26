"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin/admin.service");
const admin_controller_1 = require("./admin.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const billing_entity_1 = require("./billing.entity");
const diagnosis_entity_1 = require("./diagnosis.entity");
const patient_entity_1 = require("./patient.entity");
const RegisterPathorHospital_entity_1 = require("./RegisterPathorHospital.entity");
const billing_service_1 = require("./billing.service");
const user_service_1 = require("./user.service");
const diagnosis_service_1 = require("./diagnosis.service");
const patient_service_1 = require("./patient.service");
const register_pathor_hosp_service_1 = require("./register-pathor-hosp.service");
const register_hospital_controller_1 = require("./register-hospital/register-hospital.controller");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.user, billing_entity_1.billing, diagnosis_entity_1.diagnosis, patient_entity_1.patient, RegisterPathorHospital_entity_1.RegisterPathorHospital])],
        providers: [billing_service_1.BillingService, user_service_1.userService, diagnosis_service_1.DiagnosisService, patient_service_1.PatientService, register_pathor_hosp_service_1.RegisterPathorHospService, admin_service_1.AdminService],
        controllers: [admin_controller_1.AdminController, register_hospital_controller_1.RegisterHospitalController]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map