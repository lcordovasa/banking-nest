export declare class AppNotification {
    private errors;
    constructor();
    addError(message: string): void;
    errorMessage(separator?: string): string;
    hasErrors(): boolean;
}
