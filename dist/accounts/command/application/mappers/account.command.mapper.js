"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCommandMapper = void 0;
const customer_command_mapper_1 = require("../../../../customers/command/application/mappers/customer.command.mapper");
const account_entity_1 = require("../../domain/entities/account.entity");
const account_typeorm_1 = require("../../infra/persistence/typeorm/entities/account.typeorm");
const open_account_1 = require("../commands/open.account");
const lock_account_response_dto_1 = require("../dto/lock.account.response.dto");
const open_account_response_dto_1 = require("../dto/open.account.response.dto");
const unlock_account_response_dto_1 = require("../dto/unlock.account.response.dto");
class AccountCommandMapper {
    static toOpenAccountCommand(openAccountRequestDto) {
        let openAccount = new open_account_1.OpenAccount();
        openAccount.customerId = openAccountRequestDto.customerId;
        openAccount.isLocked = false;
        openAccount.balance = 0;
        return openAccount;
    }
    static toOpenAccountResponseDto(accountTypeOrm) {
        let openAccountResponseDto = new open_account_response_dto_1.OpenAccountResponseDto();
        openAccountResponseDto.accountId = Number(accountTypeOrm.id);
        openAccountResponseDto.number = accountTypeOrm.number;
        openAccountResponseDto.balance = accountTypeOrm.balance;
        openAccountResponseDto.isLocked = Boolean(accountTypeOrm.isLocked);
        openAccountResponseDto.createdAt = accountTypeOrm.createdAt;
        return openAccountResponseDto;
    }
    static toBankAccount(accountTypeOrm) {
        const bankAccount = account_entity_1.BankAccount.from(accountTypeOrm.id, accountTypeOrm.number, accountTypeOrm.balance, accountTypeOrm.isLocked, customer_command_mapper_1.CustomerCommandMapper.toCustomerWithId(accountTypeOrm.customerId), accountTypeOrm.createdAt, accountTypeOrm.updatedAt);
        return bankAccount;
    }
    static toAccountTypeOrm(bankAccount) {
        let accountTypeOrm = new account_typeorm_1.AccountTypeOrm();
        accountTypeOrm.id = Number(bankAccount.getId());
        accountTypeOrm.number = bankAccount.getNumber();
        accountTypeOrm.balance = Number(bankAccount.getBalance());
        accountTypeOrm.isLocked = bankAccount.isIsLocked();
        (accountTypeOrm.customer = customer_command_mapper_1.CustomerCommandMapper.toCustomerTypeOrmWithId(bankAccount.getCustomer().getId())),
            (accountTypeOrm.createdAt = bankAccount.getCreatedAt());
        accountTypeOrm.updatedAt = bankAccount.getUpdatedAt();
        return accountTypeOrm;
    }
    static toLockAccountResponseDto(accountTypeOrm) {
        let lockAccountResponseDto = new lock_account_response_dto_1.LockAccountResponseDto();
        lockAccountResponseDto.id = Number(accountTypeOrm.id);
        lockAccountResponseDto.number = accountTypeOrm.number;
        lockAccountResponseDto.balance = accountTypeOrm.balance;
        lockAccountResponseDto.isLocked = Boolean(accountTypeOrm.isLocked).valueOf();
        lockAccountResponseDto.customerId = Number(accountTypeOrm.customerId);
        lockAccountResponseDto.createdAt = accountTypeOrm.createdAt;
        lockAccountResponseDto.updatedAt = accountTypeOrm.updatedAt;
        return lockAccountResponseDto;
    }
    static toEmptyLockAccountResponseDto() {
        let lockAccountResponseDto = new lock_account_response_dto_1.LockAccountResponseDto();
        lockAccountResponseDto.id = null;
        lockAccountResponseDto.number = null;
        lockAccountResponseDto.balance = null;
        lockAccountResponseDto.isLocked = null;
        lockAccountResponseDto.customerId = null;
        lockAccountResponseDto.createdAt = null;
        lockAccountResponseDto.updatedAt = null;
        return lockAccountResponseDto;
    }
    static toUnlockAccountResponseDto(accountTypeOrm) {
        let unlockAccountResponseDto = new unlock_account_response_dto_1.UnlockAccountResponseDto();
        unlockAccountResponseDto.id = Number(accountTypeOrm.id);
        unlockAccountResponseDto.number = accountTypeOrm.number;
        unlockAccountResponseDto.balance = accountTypeOrm.balance;
        unlockAccountResponseDto.isLocked = Boolean(accountTypeOrm.isLocked).valueOf();
        unlockAccountResponseDto.customerId = Number(accountTypeOrm.customerId);
        unlockAccountResponseDto.createdAt = accountTypeOrm.createdAt;
        unlockAccountResponseDto.updatedAt = accountTypeOrm.updatedAt;
        return unlockAccountResponseDto;
    }
    static toEmptyUnlockAccountResponseDto() {
        let unlockAccountResponseDto = new unlock_account_response_dto_1.UnlockAccountResponseDto();
        unlockAccountResponseDto.id = null;
        unlockAccountResponseDto.number = null;
        unlockAccountResponseDto.balance = null;
        unlockAccountResponseDto.isLocked = null;
        unlockAccountResponseDto.customerId = null;
        unlockAccountResponseDto.createdAt = null;
        unlockAccountResponseDto.updatedAt = null;
        return unlockAccountResponseDto;
    }
}
exports.AccountCommandMapper = AccountCommandMapper;
//# sourceMappingURL=account.command.mapper.js.map