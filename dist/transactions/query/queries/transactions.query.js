"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const transaction_query_mapper_1 = require("../mappers/transaction.query.mapper");
let TransactionsQuery = class TransactionsQuery {
    async getList() {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT
      t.transaction_id,
      t.type,
      af.number AS fromAccountNumber,
      at.number AS toAccountNumber,
      t.amount,
      t.status,
      t.created_at
    FROM 
      transaction t
      LEFT JOIN account af ON t.account_id_from = af.account_id
      LEFT JOIN account at ON t.account_id_to = at.account_id
    ORDER BY
      t.created_at DESC;`;
        const ormTransactions = await manager.query(sql);
        return transaction_query_mapper_1.TransactionQueryMapper.toDtos(ormTransactions);
    }
    async getListByAccountId(accountId) {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT
      t.transaction_id,
      t.type,
      af.number AS fromAccountNumber,
      at.number AS toAccountNumber,
      t.amount,
      t.status,
      t.created_at
    FROM 
      transaction t
      LEFT JOIN account af ON t.account_id_from = af.account_id
      LEFT JOIN account at ON t.account_id_to = at.account_id
    WHERE
      af.account_id = ? OR at.account_id = ?
    ORDER BY
      t.created_at DESC;`;
        const ormTransactions = await manager.query(sql, [
            accountId,
            accountId,
        ]);
        return transaction_query_mapper_1.TransactionQueryMapper.toDtos(ormTransactions);
    }
};
TransactionsQuery = __decorate([
    common_1.Injectable()
], TransactionsQuery);
exports.TransactionsQuery = TransactionsQuery;
//# sourceMappingURL=transactions.query.js.map