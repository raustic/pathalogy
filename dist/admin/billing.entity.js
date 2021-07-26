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
exports.billing = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let billing = class billing {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, AdvanceDepositAmt: { required: true, type: () => Number }, doctorVisitDeposit: { required: true, type: () => Number }, advancedDepositDate: { required: true, type: () => Date }, PathologyTestDepositAmt: { required: true, type: () => Number }, hospitalDepositAmt: { required: true, type: () => Number }, allDepositDateAmt: { required: true, type: () => Number }, isActive: { required: true, type: () => Number }, CreatedAt: { required: true, type: () => Date }, CreatedBy: { required: true, type: () => Number }, UpdatedAt: { required: true, type: () => Date }, UpdatedBy: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], billing.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "AdvanceDepositAmt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "doctorVisitDeposit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], billing.prototype, "advancedDepositDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "PathologyTestDepositAmt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "hospitalDepositAmt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "allDepositDateAmt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], billing.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], billing.prototype, "UpdatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], billing.prototype, "UpdatedBy", void 0);
billing = __decorate([
    typeorm_1.Entity()
], billing);
exports.billing = billing;
//# sourceMappingURL=billing.entity.js.map