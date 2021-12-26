import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
export declare class TransactionTypeOrm {
    id: number;
    type: string;
    fromAccountId: number;
    fromAccount: AccountTypeOrm;
    toAccountId: number;
    toAccount: AccountTypeOrm;
    amount: number;
    status: number;
    createdAt: string;
}
