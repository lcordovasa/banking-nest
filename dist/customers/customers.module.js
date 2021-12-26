"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModule = void 0;
const common_1 = require("@nestjs/common");
const customers_controller_1 = require("./api/customers.controller");
const customers_service_1 = require("./command/application/services/customers.service");
const customers_query_1 = require("./query/queries/customers.query");
let CustomersModule = class CustomersModule {
};
CustomersModule = __decorate([
    common_1.Module({
        controllers: [customers_controller_1.CustomersController],
        providers: [customers_service_1.CustomersService, customers_query_1.CustomersQuery],
    })
], CustomersModule);
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map