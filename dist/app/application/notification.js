"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotification = void 0;
const error_1 = require("./error");
class AppNotification {
    constructor() {
        this.errors = [];
    }
    addError(message) {
        this.errors.push(new error_1.AppError(message));
    }
    errorMessage(separator = '<br/>') {
        return this.errors
            .map(function (appError) {
            return appError.getMessage();
        })
            .join(separator);
    }
    hasErrors() {
        return this.errors.length > 0;
    }
}
exports.AppNotification = AppNotification;
//# sourceMappingURL=notification.js.map