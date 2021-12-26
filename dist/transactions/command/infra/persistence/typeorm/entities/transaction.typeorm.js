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
exports.TransactionTypeOrm = void 0;
const typeorm_1 = require("typeorm");
const account_typeorm_1 = require("../../../../../../accounts/command/infra/persistence/typeorm/entities/account.typeorm");
let TransactionTypeOrm = class TransactionTypeOrm {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment', {
        type: 'bigint',
        name: 'transaction_id',
        unsigned: true,
    }),
    __metadata("design:type", Number)
], TransactionTypeOrm.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('char', { name: 'type', length: 1, nullable: false }),
    __metadata("design:type", String)
], TransactionTypeOrm.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('bigint', {
        name: 'account_id_from',
        unsigned: true,
        nullable: true,
    }),
    __metadata("design:type", Number)
], TransactionTypeOrm.prototype, "fromAccountId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => account_typeorm_1.AccountTypeOrm),
    typeorm_1.JoinColumn({ name: 'account_id_from', referencedColumnName: 'id' }),
    __metadata("design:type", account_typeorm_1.AccountTypeOrm)
], TransactionTypeOrm.prototype, "fromAccount", void 0);
__decorate([
    typeorm_1.Column('bigint', {
        name: 'account_id_to',
        unsigned: true,
        nullable: true,
    }),
    __metadata("design:type", Number)
], TransactionTypeOrm.prototype, "toAccountId", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => account_typeorm_1.AccountTypeOrm),
    typeorm_1.JoinColumn({ name: 'account_id_to', referencedColumnName: 'id' }),
    __metadata("design:type", account_typeorm_1.AccountTypeOrm)
], TransactionTypeOrm.prototype, "toAccount", void 0);
__decorate([
    typeorm_1.Column('decimal', {
        name: 'amount',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionTypeOrm.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        name: 'status',
        width: 2,
        unsigned: true,
        nullable: false,
    }),
    __metadata("design:type", Number)
], TransactionTypeOrm.prototype, "status", void 0);
__decorate([
    typeorm_1.Column('datetime', { name: 'created_at', nullable: false }),
    __metadata("design:type", String)
], TransactionTypeOrm.prototype, "createdAt", void 0);
TransactionTypeOrm = __decorate([
    typeorm_1.Entity('transaction')
], TransactionTypeOrm);
exports.TransactionTypeOrm = TransactionTypeOrm;
//# sourceMappingURL=transaction.typeorm.js.map