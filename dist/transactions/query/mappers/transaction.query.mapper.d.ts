import { TransactionDto } from '../dto/transaction.dto';
export declare class TransactionQueryMapper {
    static toDtos(ormTransactions: []): TransactionDto[];
    static toDto(ormTransaction: any): TransactionDto;
}
