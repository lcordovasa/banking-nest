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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const account_typeorm_1 = require("../../accounts/command/infra/persistence/typeorm/entities/account.typeorm");
const typeorm_1 = require("typeorm");
const perform_deposit_request_dto_1 = require("../command/application/dto/perform.deposit.request.dto");
const perform_transfer_request_dto_1 = require("../command/application/dto/perform.transfer.request.dto");
const perform_withdraw_request_dto_1 = require("../command/application/dto/perform.withdraw.request.dto");
const transaction_command_mapper_1 = require("../command/application/mappers/transaction.command.mapper");
const transactions_service_1 = require("../command/application/services/transactions.service");
const transaction_typeorm_1 = require("../command/infra/persistence/typeorm/entities/transaction.typeorm");
const transactions_query_1 = require("../query/queries/transactions.query");
let TransactionsController = class TransactionsController {
    constructor(transactionsCommand, transactionsQuery) {
        this.transactionsCommand = transactionsCommand;
        this.transactionsQuery = transactionsQuery;
    }
    performDeposit(performDepositRequestDto, transactionRepository, accountRepository) {
        const peformDeposit = transaction_command_mapper_1.TransactionCommandMapper.toPerformDepositCommand(performDepositRequestDto);
        return this.transactionsCommand.performDeposit(peformDeposit, transactionRepository, accountRepository);
    }
    performWithdraw(performWithdrawRequestDto, transactionRepository, accountRepository) {
        const performWithdraw = transaction_command_mapper_1.TransactionCommandMapper.toPerformWithdrawCommand(performWithdrawRequestDto);
        return this.transactionsCommand.performWithdraw(performWithdraw, transactionRepository, accountRepository);
    }
    performTransfer(performTransferRequestDto, transactionRepository, accountRepository) {
        const performTransfer = transaction_command_mapper_1.TransactionCommandMapper.toPerformTransferCommand(performTransferRequestDto);
        return this.transactionsCommand.performTransfer(performTransfer, transactionRepository, accountRepository);
    }
    getList() {
        return this.transactionsQuery.getList();
    }
    getListByAccountId(accountId) {
        return this.transactionsQuery.getListByAccountId(accountId);
    }
};
__decorate([
    common_1.Post('deposit'),
    typeorm_1.Transaction(),
    __param(0, common_1.Body()),
    __param(1, typeorm_1.TransactionRepository(transaction_typeorm_1.TransactionTypeOrm)),
    __param(2, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [perform_deposit_request_dto_1.PerformDepositRequestDto,
        typeorm_1.Repository,
        typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "performDeposit", null);
__decorate([
    common_1.Post('withdraw'),
    typeorm_1.Transaction(),
    __param(0, common_1.Body()),
    __param(1, typeorm_1.TransactionRepository(transaction_typeorm_1.TransactionTypeOrm)),
    __param(2, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [perform_withdraw_request_dto_1.PerformWithdrawRequestDto,
        typeorm_1.Repository,
        typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "performWithdraw", null);
__decorate([
    common_1.Post('transfer'),
    typeorm_1.Transaction(),
    __param(0, common_1.Body()),
    __param(1, typeorm_1.TransactionRepository(transaction_typeorm_1.TransactionTypeOrm)),
    __param(2, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [perform_transfer_request_dto_1.PerformTransferRequestDto,
        typeorm_1.Repository,
        typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "performTransfer", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getList", null);
__decorate([
    common_1.Get('accounts/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getListByAccountId", null);
TransactionsController = __decorate([
    common_1.Controller('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService,
        transactions_query_1.TransactionsQuery])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map