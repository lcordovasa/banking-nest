import { BankAccount } from 'src/accounts/command/domain/entities/account.entity';
export declare class Transaction {
    private id;
    private type;
    private fromAccount;
    private toAccount;
    private amount;
    private createdAt;
    constructor(id: number, type: string, fromAccount: BankAccount, toAccount: BankAccount, amount: number, createdAt: string);
    getId(): number;
    getType(): string;
    getFromAccount(): BankAccount;
    getToAccount(): BankAccount;
    getAmount(): number;
    getCreatedAt(): string;
}
