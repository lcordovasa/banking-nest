"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const accounts_controller_1 = require("./api/accounts.controller");
const accounts_service_1 = require("./command/application/service/accounts.service");
const accounts_query_1 = require("./query/queries/accounts.query");
let AccountsModule = class AccountsModule {
};
AccountsModule = __decorate([
    common_1.Module({
        controllers: [accounts_controller_1.AccountsController],
        providers: [accounts_service_1.AccountsService, accounts_query_1.AccountsQuery],
    })
], AccountsModule);
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map