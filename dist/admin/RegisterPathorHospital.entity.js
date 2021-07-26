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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterPathorHospital = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let RegisterPathorHospital = class RegisterPathorHospital {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, hospitalorPathName: { required: true, type: () => String }, consultName: { required: true, type: () => String }, consultMobile: { required: true, type: () => String }, Address: { required: true, type: () => String }, city: { required: true, type: () => String }, zip: { required: true, type: () => String }, regId: { required: true, type: () => String }, isActive: { required: true, type: () => Number }, CreatedAt: { required: true, type: () => Date }, CreatedBy: { required: true, type: () => Number }, UpdatedAt: { required: true, type: () => Date }, UpdatedBy: { required: true, type: () => Number }, mobile: { required: true, type: () => String }, pwd: { required: true, type: () => String } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RegisterPathorHospital.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "hospitalorPathName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "consultName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "consultMobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "Address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "zip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "regId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RegisterPathorHospital.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], RegisterPathorHospital.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RegisterPathorHospital.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], RegisterPathorHospital.prototype, "UpdatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RegisterPathorHospital.prototype, "UpdatedBy", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "mobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegisterPathorHospital.prototype, "pwd", void 0);
RegisterPathorHospital = __decorate([
    typeorm_1.Entity()
], RegisterPathorHospital);
exports.RegisterPathorHospital = RegisterPathorHospital;
//# sourceMappingURL=RegisterPathorHospital.entity.js.map