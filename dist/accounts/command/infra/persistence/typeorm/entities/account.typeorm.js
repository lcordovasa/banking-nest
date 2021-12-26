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
exports.AccountTypeOrm = void 0;
const customer_typeorm_1 = require("../../../../../../customers/command/infra/persistence/typeorm/entities/customer.typeorm");
const typeorm_1 = require("typeorm");
let AccountTypeOrm = class AccountTypeOrm {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        name: 'account_id',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], AccountTypeOrm.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', {
        name: 'number',
        unique: true,
        length: 50,
        nullable: false,
    }),
    __metadata("design:type", String)
], AccountTypeOrm.prototype, "number", void 0);
__decorate([
    typeorm_1.Column('decimal', {
        name: 'balance',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], AccountTypeOrm.prototype, "balance", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        name: 'is_locked',
        width: 1,
        unsigned: true,
        default: false,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], AccountTypeOrm.prototype, "isLocked", void 0);
__decorate([
    typeorm_1.Column('bigint', { name: 'customer_id', unsigned: true, nullable: false }),
    __metadata("design:type", Number)
], AccountTypeOrm.prototype, "customerId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => customer_typeorm_1.CustomerTypeOrm),
    typeorm_1.JoinColumn({ name: 'customer_id', referencedColumnName: 'id' }),
    __metadata("design:type", customer_typeorm_1.CustomerTypeOrm)
], AccountTypeOrm.prototype, "customer", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'created_at', nullable: false }),
    __metadata("design:type", String)
], AccountTypeOrm.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'updated_at', nullable: false }),
    __metadata("design:type", String)
], AccountTypeOrm.prototype, "updatedAt", void 0);
AccountTypeOrm = __decorate([
    typeorm_1.Entity('account')
], AccountTypeOrm);
exports.AccountTypeOrm = AccountTypeOrm;
//# sourceMappingURL=account.typeorm.js.map