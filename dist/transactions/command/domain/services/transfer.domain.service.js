"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDomainService = void 0;
const common_1 = require("@nestjs/common");
const account_entity_1 = require("../../../../accounts/command/domain/entities/account.entity");
const notification_1 = require("../../../../app/application/notification");
let TransferDomainService = class TransferDomainService {
    performTransfer(fromBankAccount, toBankAccount, amount) {
        let notification = this.validation(fromBankAccount, toBankAccount, amount);
        if (notification.hasErrors()) {
            throw new Error(notification.errorMessage());
        }
        fromBankAccount.withdrawMoney(amount);
        toBankAccount.depositMoney(amount);
    }
    validation(fromAccount, toAccount, amount) {
        let notification = new notification_1.AppNotification();
        this.validateAmount(notification, amount);
        this.validateBankAccounts(notification, fromAccount, toAccount);
        return notification;
    }
    validateAmount(notification, amount) {
        if (amount == null) {
            notification.addError('amount is missing');
            return;
        }
        if (amount <= 0) {
            notification.addError('The amount must be greater than zero');
        }
    }
    validateBankAccounts(notification, fromAccount, toAccount) {
        if (fromAccount == null || toAccount == null) {
            notification.addError('Cannot perform the transfer. Invalid data in bank accounts specifications');
            return;
        }
        if (fromAccount.getNumber() === toAccount.getNumber()) {
            notification.addError('Cannot transfer money to the same bank account');
        }
    }
};
TransferDomainService = __decorate([
    common_1.Injectable()
], TransferDomainService);
exports.TransferDomainService = TransferDomainService;
//# sourceMappingURL=transfer.domain.service.js.map