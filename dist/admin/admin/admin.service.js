"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const billing_entity_1 = require("../billing.entity");
const diagnosis_entity_1 = require("../diagnosis.entity");
const patient_entity_1 = require("../patient.entity");
const RegisterPathorHospital_entity_1 = require("../RegisterPathorHospital.entity");
const user_entity_1 = require("../user.entity");
let AdminService = class AdminService {
    constructor(userRepo, billingRepo, diagnoseRepo, patientRepo, RegisterHosp) {
        this.userRepo = userRepo;
        this.billingRepo = billingRepo;
        this.diagnoseRepo = diagnoseRepo;
        this.patientRepo = patientRepo;
        this.RegisterHosp = RegisterHosp;
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.user)),
    __param(1, typeorm_1.InjectRepository(billing_entity_1.billing)),
    __param(2, typeorm_1.InjectRepository(diagnosis_entity_1.diagnosis)),
    __param(3, typeorm_1.InjectRepository(patient_entity_1.patient)),
    __param(4, typeorm_1.InjectRepository(RegisterPathorHospital_entity_1.RegisterPathorHospital)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map