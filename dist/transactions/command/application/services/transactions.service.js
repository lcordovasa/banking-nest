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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const account_command_mapper_1 = require("../../../../accounts/command/application/mappers/account.command.mapper");
const account_entity_1 = require("../../../../accounts/command/domain/entities/account.entity");
const account_typeorm_1 = require("../../../../accounts/command/infra/persistence/typeorm/entities/account.typeorm");
const datetime_1 = require("../../../../app/infra/utils/datetime");
const transaction_status_enum_1 = require("../../domain/enums/transaction.status.enum");
const transaction_type_enum_1 = require("../../domain/enums/transaction.type.enum");
const transfer_domain_service_1 = require("../../domain/services/transfer.domain.service");
const transaction_typeorm_1 = require("../../infra/persistence/typeorm/entities/transaction.typeorm");
const transaction_command_mapper_1 = require("../mappers/transaction.command.mapper");
let TransactionsService = class TransactionsService {
    constructor(transferDomainService) {
        this.transferDomainService = transferDomainService;
    }
    async performDeposit(performDeposit, transactionRepository, accountRepository) {
        let transactionTypeOrm;
        try {
            let accountTypeOrm = await accountRepository
                .createQueryBuilder('account')
                .setLock('pessimistic_write')
                .useTransaction(true)
                .where('account.number = :number', {
                number: performDeposit.accountNumber,
            })
                .getOne();
            let account = account_command_mapper_1.AccountCommandMapper.toBankAccount(accountTypeOrm);
            account.depositMoney(performDeposit.amount);
            accountTypeOrm.balance = Number(account.getBalance());
            accountTypeOrm.updatedAt = datetime_1.DateTime.getUtcDateTime();
            await accountRepository.save(accountTypeOrm);
            transactionTypeOrm = new transaction_typeorm_1.TransactionTypeOrm();
            transactionTypeOrm.type = transaction_type_enum_1.TransactionType.DEPOSIT;
            transactionTypeOrm.fromAccount = null;
            transactionTypeOrm.toAccount = accountTypeOrm;
            transactionTypeOrm.amount = Number(performDeposit.amount);
            transactionTypeOrm.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
            transactionTypeOrm.createdAt = datetime_1.DateTime.getUtcDateTime();
            await transactionRepository.save(transactionTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException('Error');
        }
        return transaction_command_mapper_1.TransactionCommandMapper.toPerformDepositResponseDto(transactionTypeOrm);
    }
    async performWithdraw(performWithdraw, transactionRepository, accountRepository) {
        let transactionTypeOrm;
        try {
            let accountTypeOrm = await accountRepository
                .createQueryBuilder('account')
                .setLock('pessimistic_write')
                .useTransaction(true)
                .where('account.number = :number', {
                number: performWithdraw.accountNumber,
            })
                .getOne();
            let account = account_command_mapper_1.AccountCommandMapper.toBankAccount(accountTypeOrm);
            account.withdrawMoney(performWithdraw.amount);
            accountTypeOrm.balance = Number(account.getBalance());
            accountTypeOrm.updatedAt = datetime_1.DateTime.getUtcDateTime();
            await accountRepository.save(accountTypeOrm);
            transactionTypeOrm = new transaction_typeorm_1.TransactionTypeOrm();
            transactionTypeOrm.type = transaction_type_enum_1.TransactionType.WITHDRAW;
            transactionTypeOrm.fromAccount = accountTypeOrm;
            transactionTypeOrm.toAccount = null;
            transactionTypeOrm.amount = Number(performWithdraw.amount);
            transactionTypeOrm.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
            transactionTypeOrm.createdAt = datetime_1.DateTime.getUtcDateTime();
            await transactionRepository.save(transactionTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException('Error');
        }
        return transaction_command_mapper_1.TransactionCommandMapper.toPerformWithdrawResponseDto(transactionTypeOrm);
    }
    async performTransfer(performTransfer, transactionRepository, accountRepository) {
        let transactionTypeOrm;
        try {
            let fromAccountTypeOrm = await accountRepository
                .createQueryBuilder('account')
                .setLock('pessimistic_write')
                .useTransaction(true)
                .where('account.number = :number', {
                number: performTransfer.fromAccountNumber,
            })
                .getOne();
            let toAccountTypeOrm = await accountRepository
                .createQueryBuilder('account')
                .setLock('pessimistic_write')
                .useTransaction(true)
                .where('account.number = :number', {
                number: performTransfer.toAccountNumber,
            })
                .getOne();
            let fromBankAccount = account_command_mapper_1.AccountCommandMapper.toBankAccount(fromAccountTypeOrm);
            let toBankAccount = account_command_mapper_1.AccountCommandMapper.toBankAccount(toAccountTypeOrm);
            this.transferDomainService.performTransfer(fromBankAccount, toBankAccount, performTransfer.amount);
            fromAccountTypeOrm.balance = Number(fromBankAccount.getBalance());
            fromAccountTypeOrm.updatedAt = datetime_1.DateTime.getUtcDateTime();
            toAccountTypeOrm.balance = Number(toBankAccount.getBalance());
            toAccountTypeOrm.updatedAt = datetime_1.DateTime.getUtcDateTime();
            await accountRepository.save(fromAccountTypeOrm);
            await accountRepository.save(toAccountTypeOrm);
            transactionTypeOrm = new transaction_typeorm_1.TransactionTypeOrm();
            transactionTypeOrm.type = transaction_type_enum_1.TransactionType.TRANSFER;
            transactionTypeOrm.fromAccount = fromAccountTypeOrm;
            transactionTypeOrm.toAccount = toAccountTypeOrm;
            transactionTypeOrm.amount = Number(performTransfer.amount);
            transactionTypeOrm.status = transaction_status_enum_1.TransactionStatus.COMPLETED;
            transactionTypeOrm.createdAt = datetime_1.DateTime.getUtcDateTime();
            await transactionRepository.save(transactionTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException('Error');
        }
        return transaction_command_mapper_1.TransactionCommandMapper.toPerformTransferResponseDto(transactionTypeOrm);
    }
};
TransactionsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [transfer_domain_service_1.TransferDomainService])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map