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
exports.user = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let user = class user {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, mobile: { required: true, type: () => String }, addressline1: { required: true, type: () => String }, addressline2: { required: true, type: () => String }, zip: { required: true, type: () => String }, role: { required: true, type: () => String }, isActive: { required: true, type: () => Number }, CreatedAt: { required: true, type: () => Date }, CreatedBy: { required: true, type: () => Number }, UpdatedAt: { required: true, type: () => Date }, UpdatedBy: { required: true, type: () => Number } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], user.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "mobile", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "addressline1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "addressline2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "zip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], user.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], user.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], user.prototype, "CreatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], user.prototype, "CreatedBy", void 0);
__decorate([
    typeorm_1.Column({ type: 'date', nullable: true, default: null }),
    __metadata("design:type", Date)
], user.prototype, "UpdatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], user.prototype, "UpdatedBy", void 0);
user = __decorate([
    typeorm_1.Entity()
], user);
exports.user = user;
//# sourceMappingURL=user.entity.js.map