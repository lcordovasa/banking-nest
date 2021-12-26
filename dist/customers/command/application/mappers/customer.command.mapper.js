"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCommandMapper = void 0;
const customer_typeorm_1 = require("../../infra/persistence/typeorm/entities/customer.typeorm");
const add_customer_1 = require("../commands/add.customer");
const add_customer_response_dto_1 = require("../dto/add.customer.response.dto");
const datetime_1 = require("../../../../app/infra/utils/datetime");
const customer_entity_1 = require("../../domain/entities/customer.entity");
const delete_customer_response_dto_1 = require("../dto/delete.customer.response.dto");
class CustomerCommandMapper {
    static toAddCustomerCommand(addCustomerRequestDto) {
        let addCustomer = new add_customer_1.AddCustomer();
        addCustomer.firstName = addCustomerRequestDto.firstName;
        addCustomer.lastName = addCustomerRequestDto.lastName;
        addCustomer.isActive = true;
        addCustomer.createdAt = datetime_1.DateTime.getUtcDateTime();
        addCustomer.updatedAt = datetime_1.DateTime.getUtcDateTime();
        return addCustomer;
    }
    static toCustomerTypeOrm(addCustomer) {
        let customerTypeOrm = new customer_typeorm_1.CustomerTypeOrm();
        customerTypeOrm.firstName = addCustomer.firstName;
        customerTypeOrm.lastName = addCustomer.lastName;
        customerTypeOrm.isActive = addCustomer.isActive;
        customerTypeOrm.createdAt = addCustomer.createdAt;
        customerTypeOrm.updatedAt = addCustomer.updatedAt;
        return customerTypeOrm;
    }
    static toCustomerWithId(id) {
        return customer_entity_1.Customer.withId(id);
    }
    static toCustomerTypeOrmWithId(id) {
        return customer_typeorm_1.CustomerTypeOrm.withId(id);
    }
    static toAddCustomerResponseDto(customerTypeOrm) {
        let addCustomerResponseDto = new add_customer_response_dto_1.AddCustomerResponseDto();
        addCustomerResponseDto.id = Number(customerTypeOrm.id);
        addCustomerResponseDto.firstName = customerTypeOrm.firstName;
        addCustomerResponseDto.lastName = customerTypeOrm.lastName;
        addCustomerResponseDto.isActive = Boolean(customerTypeOrm.isActive).valueOf();
        addCustomerResponseDto.createdAt = customerTypeOrm.createdAt;
        addCustomerResponseDto.updatedAt = customerTypeOrm.updatedAt;
        return addCustomerResponseDto;
    }
    static toDeleteCustomerResponseDto(customerTypeOrm) {
        let deleteCustomerResponseDto = new delete_customer_response_dto_1.DeleteCustomerResponseDto();
        deleteCustomerResponseDto.id = Number(customerTypeOrm.id);
        deleteCustomerResponseDto.firstName = customerTypeOrm.firstName;
        deleteCustomerResponseDto.lastName = customerTypeOrm.lastName;
        deleteCustomerResponseDto.isActive = Boolean(customerTypeOrm.isActive).valueOf();
        deleteCustomerResponseDto.createdAt = customerTypeOrm.createdAt;
        deleteCustomerResponseDto.updatedAt = customerTypeOrm.updatedAt;
        return deleteCustomerResponseDto;
    }
    static toEmptyDeleteCustomerResponseDto() {
        let deleteCustomerResponseDto = new delete_customer_response_dto_1.DeleteCustomerResponseDto();
        deleteCustomerResponseDto.id = null;
        deleteCustomerResponseDto.firstName = null;
        deleteCustomerResponseDto.lastName = null;
        deleteCustomerResponseDto.isActive = false;
        deleteCustomerResponseDto.createdAt = null;
        deleteCustomerResponseDto.updatedAt = null;
        return deleteCustomerResponseDto;
    }
}
exports.CustomerCommandMapper = CustomerCommandMapper;
//# sourceMappingURL=customer.command.mapper.js.map