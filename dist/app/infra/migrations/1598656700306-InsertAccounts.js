"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertAccounts1598656700306 = void 0;
class InsertAccounts1598656700306 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO account(number, balance, is_locked, customer_id, created_at, updated_at)
            VALUES
            ('0000000001', 0, 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('0000000002', 0, 0, 1, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('0000000003', 0, 0, 2, UTC_TIMESTAMP(), UTC_TIMESTAMP()),
            ('0000000004', 0, 0, 3, UTC_TIMESTAMP(), UTC_TIMESTAMP());
        `);
    }
    async down(queryRunner) { }
}
exports.InsertAccounts1598656700306 = InsertAccounts1598656700306;
//# sourceMappingURL=1598656700306-InsertAccounts.js.map