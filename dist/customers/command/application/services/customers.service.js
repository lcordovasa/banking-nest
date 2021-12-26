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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const customer_typeorm_1 = require("../../infra/persistence/typeorm/entities/customer.typeorm");
const customer_command_mapper_1 = require("../mappers/customer.command.mapper");
let CustomersService = class CustomersService {
    constructor() { }
    async add(addCustomer) {
        let customerTypeOrm;
        try {
            customerTypeOrm = customer_command_mapper_1.CustomerCommandMapper.toCustomerTypeOrm(addCustomer);
            const customerRepository = typeorm_1.getRepository(customer_typeorm_1.CustomerTypeOrm);
            const ormResult = await customerRepository.insert(customerTypeOrm);
            const id = parseInt(ormResult.identifiers[0].id);
            customerTypeOrm.id = id;
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException(customerTypeOrm);
        }
        return customer_command_mapper_1.CustomerCommandMapper.toAddCustomerResponseDto(customerTypeOrm);
    }
    async delete(customerId) {
        let responseDto;
        let customerTypeOrm;
        try {
            const customerRepository = typeorm_1.getRepository(customer_typeorm_1.CustomerTypeOrm);
            const customerTypeOrm = await customerRepository.findOne({
                id: customerId,
            });
            if (customerTypeOrm === null || customerTypeOrm === undefined) {
                return customer_command_mapper_1.CustomerCommandMapper.toEmptyDeleteCustomerResponseDto();
            }
            await customerRepository.delete(customerId);
            responseDto = customer_command_mapper_1.CustomerCommandMapper.toDeleteCustomerResponseDto(customerTypeOrm);
        }
        catch (e) {
            console.log(e);
            throw new common_1.ConflictException(customerTypeOrm);
        }
        return responseDto;
    }
};
CustomersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map