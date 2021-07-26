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
exports.patient = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let patient = class patient {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, aadhar: { required: true, type: () => String }, name: { required: true, type: () => String }, dob: { required: true, type: () => Date }, sex: { required: true, type: () => String }, maritalStatus: { required: true, type: () => String }, fatherName: { required: true, type: () => String }, husbandName: { required: true, type: () => String }, motherName: { required: true, type: () => String }, wifeName: { required: true, type: () => String }, ReferencedByName: { required: true, type: () => String }, ReferenceByMobile: { required: true, type: () => String }, consentFormImage: { required: true, type: () => String }, Address: { required: true, type: () => String }, HouseNo: { required: true, type: () => String }, buildingorMohalla: { required: true, type: () => String }, village: { required: true, type: () => String }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, country: { required: true, type: () => String }, patientOccupation: { required: true, type: () => String }, patientMobile: { required: true, type: () => String }, email: { required: true, type: () => String }, emergencyMobile: { required: true, type: () => String }, isActive: { required: true, type: () => Number }, CreatedAt: { required: true, type: () => Date }, CreatedBy: { required: true, type: () => Number }, UpdatedAt: { required: true, type: () => Date }, UpdatedBy: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], patient.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "aadhar", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], patient.prototype, "dob", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "maritalStatus", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "fatherName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "husbandName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "motherName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "wifeName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "ReferencedByName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "ReferenceByMobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "consentFormImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "Address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "HouseNo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "buildingorMohalla", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "village", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "patientOccupation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "patientMobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], patient.prototype, "emergencyMobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], patient.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], patient.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], patient.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], patient.prototype, "UpdatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], patient.prototype, "UpdatedBy", void 0);
patient = __decorate([
    typeorm_1.Entity()
], patient);
exports.patient = patient;
//# sourceMappingURL=patient.entity.js.map