"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(id, firstName, lastName, isActive, createdAt, updatedAt) {
        this.id = Number(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static withId(id) {
        return new Customer(id, '', '', true, '', '');
    }
    getId() {
        return this.id;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    isIsActive() {
        return this.isActive;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map