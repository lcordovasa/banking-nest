"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerQueryMapper = void 0;
const customer_typeorm_1 = require("../../command/infra/persistence/typeorm/entities/customer.typeorm");
const customer_dto_1 = require("../dto/customer.dto");
class CustomerQueryMapper {
    static toDtos(ormCustomers) {
        return ormCustomers.map((ormCustomer) => this.toDto(ormCustomer));
    }
    static toDto(ormCustomer) {
        const customerDto = new customer_dto_1.CustomerDto();
        customerDto.id = parseInt(ormCustomer.customer_id, 10);
        customerDto.firstName = ormCustomer.first_name;
        customerDto.lastName = ormCustomer.last_name;
        customerDto.isActive = Boolean(ormCustomer.is_active).valueOf();
        customerDto.createdAt = ormCustomer.created_at;
        customerDto.updatedAt = ormCustomer.updated_at;
        return customerDto;
    }
    static toEmpty() {
        const customerDto = new customer_dto_1.CustomerDto();
        customerDto.id = null;
        customerDto.firstName = null;
        customerDto.lastName = null;
        customerDto.isActive = false;
        customerDto.createdAt = null;
        customerDto.updatedAt = null;
        return customerDto;
    }
}
exports.CustomerQueryMapper = CustomerQueryMapper;
//# sourceMappingURL=customer.query.mapper.js.map