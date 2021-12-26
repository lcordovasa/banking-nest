"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertCustomers1598578773996 = void 0;
class InsertCustomers1598578773996 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO customer(first_name, last_name, is_active, created_at, updated_at) 
            VALUES
            ('Juan', 'Pérez', 1, UTC_TIMESTAMP(),UTC_TIMESTAMP()),
            ('Carlos', 'Pérez', 1, UTC_TIMESTAMP(),UTC_TIMESTAMP()),
            ('Alberto', 'Otero', 1, UTC_TIMESTAMP(),UTC_TIMESTAMP());
        `);
    }
    async down(queryRunner) { }
}
exports.InsertCustomers1598578773996 = InsertCustomers1598578773996;
//# sourceMappingURL=1598578773996-InsertCustomers.js.map