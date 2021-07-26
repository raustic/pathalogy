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
exports.RegisterHospitalController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const register_pathor_hosp_service_1 = require("../register-pathor-hosp.service");
const RegisterPathorHospital_entity_1 = require("../RegisterPathorHospital.entity");
let RegisterHospitalController = class RegisterHospitalController {
    constructor(_regHosp) {
        this._regHosp = _regHosp;
    }
    async RegisterHospital(model) {
        var _msg = this._regHosp.RegisterHospital(model);
        return _msg;
    }
};
__decorate([
    common_1.Post('RegisterHospital'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterPathorHospital_entity_1.RegisterPathorHospital]),
    __metadata("design:returntype", Promise)
], RegisterHospitalController.prototype, "RegisterHospital", null);
RegisterHospitalController = __decorate([
    common_1.Controller('register-hospital'),
    __metadata("design:paramtypes", [register_pathor_hosp_service_1.RegisterPathorHospService])
], RegisterHospitalController);
exports.RegisterHospitalController = RegisterHospitalController;
//# sourceMappingURL=register-hospital.controller.js.map