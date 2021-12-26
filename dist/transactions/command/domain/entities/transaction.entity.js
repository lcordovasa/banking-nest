"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const account_entity_1 = require("../../../../accounts/command/domain/entities/account.entity");
class Transaction {
    constructor(id, type, fromAccount, toAccount, amount, createdAt) {
        this.id = id;
        this.type = type;
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
        this.createdAt = createdAt;
    }
    getId() {
        return this.id;
    }
    getType() {
        return this.type;
    }
    getFromAccount() {
        return this.fromAccount;
    }
    getToAccount() {
        return this.toAccount;
    }
    getAmount() {
        return this.amount;
    }
    getCreatedAt() {
        return this.createdAt;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map