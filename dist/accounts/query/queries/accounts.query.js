"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const account_query_mapper_1 = require("../mappers/account.query.mapper");
let AccountsQuery = class AccountsQuery {
    async getById(accountId) {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT
      a.account_id,
      a.number,
      a.balance,
      a.is_locked,
      a.customer_id,
      a.created_at,
      a.updated_at
    FROM 
      account a
    WHERE
      a.account_id = ?
    ORDER BY
      a.created_at DESC, a.account_id DESC;`;
        const ormAccount = await manager.query(sql, [accountId]);
        return ormAccount.length > 0
            ? account_query_mapper_1.AccountQueryMapper.toDto(ormAccount[0])
            : account_query_mapper_1.AccountQueryMapper.toEmpty();
    }
    async getList() {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT 
      a.account_id,
      a.number,
      a.balance,
      a.is_locked,
      a.customer_id,
      c.first_name,
      c.last_name,
      a.created_at,
      a.updated_at
    FROM 
      account a
      JOIN customer c ON a.customer_id = c.customer_id
    ORDER BY
      a.created_at DESC, a.account_id DESC;`;
        const ormAccounts = await manager.query(sql);
        return account_query_mapper_1.AccountQueryMapper.toDtos(ormAccounts);
    }
};
AccountsQuery = __decorate([
    common_1.Injectable()
], AccountsQuery);
exports.AccountsQuery = AccountsQuery;
//# sourceMappingURL=accounts.query.js.map