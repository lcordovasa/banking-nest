import { BankAccount } from 'src/accounts/command/domain/entities/account.entity';
export declare class TransferDomainService {
    performTransfer(fromBankAccount: BankAccount, toBankAccount: BankAccount, amount: number): void;
    private validation;
    private validateAmount;
    private validateBankAccounts;
}
