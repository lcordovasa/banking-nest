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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const datetime_1 = require("../../../../app/infra/utils/datetime");
const account_typeorm_1 = require("../../infra/persistence/typeorm/entities/account.typeorm");
const account_command_mapper_1 = require("../mappers/account.command.mapper");
let AccountsService = class AccountsService {
    constructor() { }
    async openAccount(openAccount, accountRepository) {
        let accountTypeOrm;
        try {
            let { max } = await accountRepository
                .createQueryBuilder('account')
                .setLock('pessimistic_read')
                .useTransaction(true)
                .select('MAX(account.number)', 'max')
                .getRawOne();
            max = max != null ? Number(max) + 1 : 1;
            let accountNumber = max.toString();
            const maxLength = 10;
            accountNumber = accountNumber.padStart(maxLength, '0');
            const nowUtc = datetime_1.DateTime.getUtcDateTime();
            accountTypeOrm = new account_typeorm_1.AccountTypeOrm();
            accountTypeOrm.balance = openAccount.balance;
            accountTypeOrm.customerId = openAccount.customerId;
            accountTypeOrm.isLocked = openAccount.isLocked;
            accountTypeOrm.number = accountNumber;
            accountTypeOrm.createdAt = nowUtc;
            accountTypeOrm.updatedAt = nowUtc;
            await accountRepository.save(accountTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException('Error');
        }
        return account_command_mapper_1.AccountCommandMapper.toOpenAccountResponseDto(accountTypeOrm);
    }
    async lock(accountId, accountRepository) {
        let responseDto;
        let accountTypeOrm;
        try {
            const accountTypeOrm = await accountRepository.findOne({
                id: accountId,
            });
            if (accountTypeOrm === null || accountTypeOrm === undefined) {
                return account_command_mapper_1.AccountCommandMapper.toEmptyLockAccountResponseDto();
            }
            const nowUtc = datetime_1.DateTime.getUtcDateTime();
            accountTypeOrm.isLocked = true;
            accountTypeOrm.updatedAt = nowUtc;
            await accountRepository.save(accountTypeOrm);
            responseDto = account_command_mapper_1.AccountCommandMapper.toLockAccountResponseDto(accountTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException(accountTypeOrm);
        }
        return responseDto;
    }
    async unlock(accountId, accountRepository) {
        let responseDto;
        let accountTypeOrm;
        try {
            const accountTypeOrm = await accountRepository.findOne({
                id: accountId,
            });
            if (accountTypeOrm === null || accountTypeOrm === undefined) {
                return account_command_mapper_1.AccountCommandMapper.toEmptyUnlockAccountResponseDto();
            }
            const nowUtc = datetime_1.DateTime.getUtcDateTime();
            accountTypeOrm.isLocked = false;
            accountTypeOrm.updatedAt = nowUtc;
            await accountRepository.save(accountTypeOrm);
            responseDto = account_command_mapper_1.AccountCommandMapper.toUnlockAccountResponseDto(accountTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException(accountTypeOrm);
        }
        return responseDto;
    }
};
AccountsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map