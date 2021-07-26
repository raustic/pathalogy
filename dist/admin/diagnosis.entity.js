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
exports.diagnosis = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let diagnosis = class diagnosis {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, examine: { required: true, type: () => String }, IsUltrasoundTest: { required: true, type: () => Boolean }, isXrayTest: { required: true, type: () => Boolean }, isPathologyTest: { required: true, type: () => Boolean }, isOtherTest: { required: true, type: () => Boolean }, otherTest: { required: true, type: () => String }, admitForm: { required: true, type: () => String }, dischargeForm: { required: true, type: () => String }, isActive: { required: true, type: () => Number }, CreatedAt: { required: true, type: () => Date }, CreatedBy: { required: true, type: () => Number }, UpdatedAt: { required: true, type: () => Date }, UpdatedBy: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], diagnosis.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], diagnosis.prototype, "examine", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], diagnosis.prototype, "IsUltrasoundTest", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], diagnosis.prototype, "isXrayTest", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], diagnosis.prototype, "isPathologyTest", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], diagnosis.prototype, "isOtherTest", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], diagnosis.prototype, "otherTest", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], diagnosis.prototype, "admitForm", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], diagnosis.prototype, "dischargeForm", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], diagnosis.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], diagnosis.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], diagnosis.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], diagnosis.prototype, "UpdatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], diagnosis.prototype, "UpdatedBy", void 0);
diagnosis = __decorate([
    typeorm_1.Entity()
], diagnosis);
exports.diagnosis = diagnosis;
//# sourceMappingURL=diagnosis.entity.js.map