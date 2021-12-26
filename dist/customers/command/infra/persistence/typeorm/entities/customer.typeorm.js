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
var CustomerTypeOrm_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerTypeOrm = void 0;
const typeorm_1 = require("typeorm");
let CustomerTypeOrm = CustomerTypeOrm_1 = class CustomerTypeOrm {
    static withId(id) {
        let customerTypeOrm = new CustomerTypeOrm_1();
        customerTypeOrm.id = Number(id);
        return customerTypeOrm;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        name: 'customer_id',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], CustomerTypeOrm.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'first_name', length: 75, nullable: false }),
    __metadata("design:type", String)
], CustomerTypeOrm.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'last_name', length: 75, nullable: false }),
    __metadata("design:type", String)
], CustomerTypeOrm.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        name: 'is_active',
        width: 1,
        unsigned: true,
        default: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], CustomerTypeOrm.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'created_at', nullable: false }),
    __metadata("design:type", String)
], CustomerTypeOrm.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'updated_at', nullable: false }),
    __metadata("design:type", String)
], CustomerTypeOrm.prototype, "updatedAt", void 0);
CustomerTypeOrm = CustomerTypeOrm_1 = __decorate([
    typeorm_1.Entity('customer')
], CustomerTypeOrm);
exports.CustomerTypeOrm = CustomerTypeOrm;
//# sourceMappingURL=customer.typeorm.js.map