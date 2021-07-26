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
exports.RegisterPathorHospService = void 0;
const common_1 = require("@nestjs/common");
const RegisterPathorHospital_entity_1 = require("./RegisterPathorHospital.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let RegisterPathorHospService = class RegisterPathorHospService {
    constructor(_regPathOrHosp) {
        this._regPathOrHosp = _regPathOrHosp;
    }
    async RegisterHospital(model) {
        var _res = {};
        try {
            model.CreatedAt = new Date();
            this._regPathOrHosp.create(model);
            this._regPathOrHosp.save(model);
            _res = {
                status: true,
                message: "Registartion Made Successfully"
            };
        }
        catch (e) {
            _res = {
                status: false,
                message: e.message
            };
        }
        return _res;
    }
    async UpdateHospital(model) {
        var _res = {};
        try {
            var record = await this._regPathOrHosp.findOne({ where: { id: model.id } });
            if (record == null) {
                _res = {
                    status: false,
                    message: "Record Not Found"
                };
            }
            record.UpdatedAt = new Date();
            this._regPathOrHosp.update(model.id, model);
            this._regPathOrHosp.save(model);
            _res = {
                status: true,
                message: "Record Updated Successfully"
            };
        }
        catch (e) {
            _res = {
                status: false,
                message: e.message
            };
        }
        return _res;
    }
};
RegisterPathorHospService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(RegisterPathorHospital_entity_1.RegisterPathorHospital)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RegisterPathorHospService);
exports.RegisterPathorHospService = RegisterPathorHospService;
//# sourceMappingURL=register-pathor-hosp.service.js.map