"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountQueryMapper = void 0;
const account_dto_1 = require("../dto/account.dto");
class AccountQueryMapper {
    static toDtos(ormAccounts) {
        return ormAccounts.map((ormAccount) => this.toDto(ormAccount));
    }
    static toDto(ormAccount) {
        const accountDto = new account_dto_1.AccountDto();
        accountDto.id = parseInt(ormAccount.account_id, 10);
        accountDto.number = ormAccount.number;
        accountDto.balance = Number(ormAccount.balance);
        accountDto.isLocked = Boolean(ormAccount.is_locked).valueOf();
        accountDto.customerId = parseInt(ormAccount.customer_id, 10);
        accountDto.createdAt = ormAccount.created_at;
        accountDto.updatedAt = ormAccount.updated_at;
        return accountDto;
    }
    static toEmpty() {
        const accountDto = new account_dto_1.AccountDto();
        accountDto.id = null;
        accountDto.number = null;
        accountDto.balance = null;
        accountDto.isLocked = false;
        accountDto.customerId = null;
        accountDto.createdAt = null;
        accountDto.updatedAt = null;
        return accountDto;
    }
}
exports.AccountQueryMapper = AccountQueryMapper;
//# sourceMappingURL=account.query.mapper.js.map