"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
const customer_entity_1 = require("../../../../customers/command/domain/entities/customer.entity");
const notification_1 = require("../../../../app/application/notification");
class BankAccount {
    constructor(id, number, balance, isLocked, customer, createdAt, updatedAt) {
        this.id = Number(id);
        this.number = number;
        this.balance = Number(balance);
        this.isLocked = isLocked;
        this.customer = customer;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static from(id, number, balance, isLocked, customer, createdAt, updatedAt) {
        return new BankAccount(id, number, balance, isLocked, customer, createdAt, updatedAt);
    }
    depositMoney(amount) {
        let notification = this.depositValidation(amount);
        if (notification.hasErrors()) {
            throw new Error(notification.errorMessage());
        }
        this.balance = this.balance + amount;
    }
    depositValidation(amount) {
        let notification = new notification_1.AppNotification();
        this.validateAmount(notification, amount);
        this.validateBankAccount(notification);
        return notification;
    }
    withdrawMoney(amount) {
        let notification = this.withdrawValidation(amount);
        if (notification.hasErrors()) {
            throw new Error(notification.errorMessage());
        }
        this.balance = this.balance - amount;
    }
    withdrawValidation(amount) {
        let notification = new notification_1.AppNotification();
        this.validateAmount(notification, amount);
        this.validateBankAccount(notification);
        this.validateBalance(notification, amount);
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
    validateBankAccount(notification) {
        if (!this.hasIdentity()) {
            notification.addError('The account has no identity');
        }
        if (this.isLocked) {
            notification.addError('The account is locked');
        }
    }
    validateBalance(notification, amount) {
        if (this.balance == null) {
            notification.addError('balance cannot be null');
        }
        if (!this.canBeWithdrawed(amount)) {
            notification.addError('Cannot withdraw in the account, amount is greater than balance');
        }
    }
    canBeWithdrawed(amount) {
        return !this.isLocked && this.balance >= amount;
    }
    doesNotExist() {
        return this.id === null || this.id <= 0;
    }
    exist() {
        return this.id != null && this.id > 0;
    }
    lock() {
        if (!this.isLocked) {
            this.isLocked = true;
        }
    }
    unLock() {
        if (this.isLocked) {
            this.isLocked = false;
        }
    }
    hasIdentity() {
        return this.number.trim().length > 0;
    }
    getId() {
        return this.id;
    }
    getNumber() {
        return this.number;
    }
    getBalance() {
        return this.balance;
    }
    isIsLocked() {
        return this.isLocked;
    }
    getCustomer() {
        return this.customer;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=account.entity.js.map