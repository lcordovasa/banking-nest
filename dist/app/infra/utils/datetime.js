"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = void 0;
const moment = require("moment-timezone");
class DateTime {
    static getUtcDateTime() {
        moment.tz.setDefault('UTC');
        return moment.tz().format();
    }
}
exports.DateTime = DateTime;
//# sourceMappingURL=datetime.js.map