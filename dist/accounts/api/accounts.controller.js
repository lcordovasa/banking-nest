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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const open_account_request_dto_1 = require("../command/application/dto/open.account.request.dto");
const account_command_mapper_1 = require("../command/application/mappers/account.command.mapper");
const accounts_service_1 = require("../command/application/service/accounts.service");
const account_typeorm_1 = require("../command/infra/persistence/typeorm/entities/account.typeorm");
const accounts_query_1 = require("../query/queries/accounts.query");
let AccountsController = class AccountsController {
    constructor(accountsCommand, accountsQuery) {
        this.accountsCommand = accountsCommand;
        this.accountsQuery = accountsQuery;
    }
    open(openAccountRequestDto, accountRepository) {
        const openAccount = account_command_mapper_1.AccountCommandMapper.toOpenAccountCommand(openAccountRequestDto);
        return this.accountsCommand.openAccount(openAccount, accountRepository);
    }
    async lock(accountId, accountRepository) {
        const accountDto = await this.accountsCommand.lock(accountId, accountRepository);
        if (accountDto.id === null) {
            throw new common_1.NotFoundException('Not found');
        }
        return accountDto;
    }
    async unlock(accountId, accountRepository) {
        const accountDto = await this.accountsCommand.unlock(accountId, accountRepository);
        if (accountDto.id === null) {
            throw new common_1.NotFoundException('Not found');
        }
        return accountDto;
    }
    getList() {
        return this.accountsQuery.getList();
    }
    async getById(accountId) {
        const accountDto = await this.accountsQuery.getById(accountId);
        if (accountDto.id === null) {
            throw new common_1.NotFoundException('Not found');
        }
        return accountDto;
    }
};
__decorate([
    common_1.Post(''),
    typeorm_1.Transaction(),
    __param(0, common_1.Body()),
    __param(1, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [open_account_request_dto_1.OpenAccountRequestDto,
        typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "open", null);
__decorate([
    common_1.Patch('/:id/lock'),
    typeorm_1.Transaction(),
    __param(0, common_1.Param('id')),
    __param(1, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "lock", null);
__decorate([
    common_1.Patch('/:id/unlock'),
    typeorm_1.Transaction(),
    __param(0, common_1.Param('id')),
    __param(1, typeorm_1.TransactionRepository(account_typeorm_1.AccountTypeOrm)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeorm_1.Repository]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "unlock", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getList", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getById", null);
AccountsController = __decorate([
    common_1.Controller('accounts'),
    __metadata("design:paramtypes", [accounts_service_1.AccountsService,
        accounts_query_1.AccountsQuery])
], AccountsController);
exports.AccountsController = AccountsController;
//# sourceMappingURL=accounts.controller.js.map