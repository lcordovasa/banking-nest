"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersQuery = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const customer_query_mapper_1 = require("../mappers/customer.query.mapper");
let CustomersQuery = class CustomersQuery {
    async getById(customerId) {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT 
      customer_id,
      first_name,
      last_name,
      is_active,
      created_at,
      updated_at
    FROM 
      customer
    WHERE
      customer_id = ?;`;
        const ormCustomer = await manager.query(sql, [customerId]);
        return ormCustomer.length > 0
            ? customer_query_mapper_1.CustomerQueryMapper.toDto(ormCustomer[0])
            : customer_query_mapper_1.CustomerQueryMapper.toEmpty();
    }
    async getList() {
        const manager = typeorm_1.getManager();
        const sql = `
    SELECT 
      customer_id,
      first_name,
      last_name,
      is_active,
      created_at,
      updated_at
    FROM 
      customer
    ORDER BY
      last_name, first_name;`;
        const ormCustomers = await manager.query(sql);
        return customer_query_mapper_1.CustomerQueryMapper.toDtos(ormCustomers);
    }
};
CustomersQuery = __decorate([
    common_1.Injectable()
], CustomersQuery);
exports.CustomersQuery = CustomersQuery;
//# sourceMappingURL=customers.query.js.map