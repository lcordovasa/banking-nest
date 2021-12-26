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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const add_customer_request_dto_1 = require("../command/application/dto/add.customer.request.dto");
const customer_command_mapper_1 = require("../command/application/mappers/customer.command.mapper");
const customers_service_1 = require("../command/application/services/customers.service");
const customers_query_1 = require("../query/queries/customers.query");
let CustomersController = class CustomersController {
    constructor(customersCommand, customersQuery) {
        this.customersCommand = customersCommand;
        this.customersQuery = customersQuery;
    }
    add(addCustomerRequestDto) {
        const addCustomer = customer_command_mapper_1.CustomerCommandMapper.toAddCustomerCommand(addCustomerRequestDto);
        return this.customersCommand.add(addCustomer);
    }
    async delete(customerId) {
        const customer = await this.customersCommand.delete(customerId);
        if (customer.id === null) {
            throw new common_1.NotFoundException('Not found');
        }
        return customer;
    }
    getList() {
        return this.customersQuery.getList();
    }
    async getById(customerId) {
        const customer = await this.customersQuery.getById(customerId);
        if (customer.id === null) {
            throw new common_1.NotFoundException('Not found');
        }
        return customer;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_customer_request_dto_1.AddCustomerRequestDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "add", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "delete", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getList", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getById", null);
CustomersController = __decorate([
    common_1.Controller('customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService,
        customers_query_1.CustomersQuery])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map