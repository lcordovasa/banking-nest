import { TransactionDto } from '../dto/transaction.dto';
export declare class TransactionsQuery {
    getList(): Promise<TransactionDto[]>;
    getListByAccountId(accountId: number): Promise<TransactionDto[]>;
}
