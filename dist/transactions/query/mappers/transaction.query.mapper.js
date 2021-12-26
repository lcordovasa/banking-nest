"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionQueryMapper = void 0;
const transaction_status_enum_1 = require("../../command/domain/enums/transaction.status.enum");
const transaction_type_enum_1 = require("../../command/domain/enums/transaction.type.enum");
const transaction_dto_1 = require("../dto/transaction.dto");
class TransactionQueryMapper {
    static toDtos(ormTransactions) {
        return ormTransactions.map((ormTransaction) => this.toDto(ormTransaction));
    }
    static toDto(ormTransaction) {
        const transactionDto = new transaction_dto_1.TransactionDto();
        transactionDto.transactionId = Number(ormTransaction.transaction_id);
        transactionDto.transactionType = transaction_type_enum_1.TransactionTypeLabel.get(ormTransaction.type);
        transactionDto.fromAccountNumber = ormTransaction.fromAccountNumber;
        transactionDto.toAccountNumber = ormTransaction.toAccountNumber;
        transactionDto.amount = Number(ormTransaction.amount);
        transactionDto.status = transaction_status_enum_1.TransactionStatus[Number(ormTransaction.status)];
        transactionDto.createdAt = ormTransaction.created_at;
        return transactionDto;
    }
}
exports.TransactionQueryMapper = TransactionQueryMapper;
//# sourceMappingURL=transaction.query.mapper.js.map