"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCommandMapper = void 0;
const perform_transfer_1 = require("../commands/perform.transfer");
const transaction_status_enum_1 = require("../../domain/enums/transaction.status.enum");
const datetime_1 = require("../../../../app/infra/utils/datetime");
const perform_transfer_response_dto_1 = require("../dto/perform.transfer.response.dto");
const perform_deposit_1 = require("../commands/perform.deposit");
const perform_deposit_response_dto_1 = require("../dto/perform.deposit.response.dto");
const perform_withdraw_1 = require("../commands/perform.withdraw");
const perform_withdraw_response_dto_1 = require("../dto/perform.withdraw.response.dto");
const transaction_type_enum_1 = require("../../domain/enums/transaction.type.enum");
class TransactionCommandMapper {
    static toPerformDepositCommand(performDepositRequestDto) {
        let performDeposit = new perform_deposit_1.PerformDeposit();
        performDeposit.accountNumber = performDepositRequestDto.accountNumber;
        performDeposit.amount = performDepositRequestDto.amount;
        performDeposit.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
        performDeposit.createdAt = datetime_1.DateTime.getUtcDateTime();
        return performDeposit;
    }
    static toPerformDepositResponseDto(transactionTypeOrm) {
        let performDepositResponseDto = new perform_deposit_response_dto_1.PerformDepositResponseDto();
        performDepositResponseDto.transactionId = Number(transactionTypeOrm.id);
        performDepositResponseDto.transactionType = transaction_type_enum_1.TransactionTypeLabel.get(transactionTypeOrm.type);
        performDepositResponseDto.accountNumber =
            transactionTypeOrm.toAccount.number;
        performDepositResponseDto.amount = Number(transactionTypeOrm.amount);
        performDepositResponseDto.status =
            transaction_status_enum_1.TransactionStatus[transactionTypeOrm.status];
        performDepositResponseDto.createdAt = transactionTypeOrm.createdAt;
        return performDepositResponseDto;
    }
    static toPerformWithdrawCommand(performWithdrawRequestDto) {
        let performWithdraw = new perform_withdraw_1.PerformWithdraw();
        performWithdraw.accountNumber = performWithdrawRequestDto.accountNumber;
        performWithdraw.amount = performWithdrawRequestDto.amount;
        performWithdraw.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
        performWithdraw.createdAt = datetime_1.DateTime.getUtcDateTime();
        return performWithdraw;
    }
    static toPerformWithdrawResponseDto(transactionTypeOrm) {
        let performWithdrawResponseDto = new perform_withdraw_response_dto_1.PerformWithdrawResponseDto();
        performWithdrawResponseDto.transactionId = Number(transactionTypeOrm.id);
        performWithdrawResponseDto.transactionType = transaction_type_enum_1.TransactionTypeLabel.get(transactionTypeOrm.type);
        performWithdrawResponseDto.accountNumber =
            transactionTypeOrm.fromAccount.number;
        performWithdrawResponseDto.amount = Number(transactionTypeOrm.amount);
        performWithdrawResponseDto.status =
            transaction_status_enum_1.TransactionStatus[transactionTypeOrm.status];
        performWithdrawResponseDto.createdAt = transactionTypeOrm.createdAt;
        return performWithdrawResponseDto;
    }
    static toPerformTransferCommand(performTransferRequestDto) {
        let performTransfer = new perform_transfer_1.PerformTransfer();
        performTransfer.fromAccountNumber =
            performTransferRequestDto.fromAccountNumber;
        performTransfer.toAccountNumber = performTransferRequestDto.toAccountNumber;
        performTransfer.amount = performTransferRequestDto.amount;
        performTransfer.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
        performTransfer.createdAt = datetime_1.DateTime.getUtcDateTime();
        return performTransfer;
    }
    static toPerformTransferResponseDto(transactionTypeOrm) {
        let performTransferResponseDto = new perform_transfer_response_dto_1.PerformTransferResponseDto();
        performTransferResponseDto.transactionId = Number(transactionTypeOrm.id);
        performTransferResponseDto.transactionType = transaction_type_enum_1.TransactionTypeLabel.get(transactionTypeOrm.type);
        performTransferResponseDto.fromAccountNumber =
            transactionTypeOrm.fromAccount.number;
        performTransferResponseDto.toAccountNumber =
            transactionTypeOrm.toAccount.number;
        performTransferResponseDto.amount = Number(transactionTypeOrm.amount);
        performTransferResponseDto.status =
            transaction_status_enum_1.TransactionStatus[transactionTypeOrm.status];
        performTransferResponseDto.createdAt = transactionTypeOrm.createdAt;
        return performTransferResponseDto;
    }
}
exports.TransactionCommandMapper = TransactionCommandMapper;
//# sourceMappingURL=transaction.command.mapper.js.map