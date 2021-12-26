import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { Repository } from 'typeorm';
import { PerformDepositRequestDto } from '../command/application/dto/perform.deposit.request.dto';
import { PerformDepositResponseDto } from '../command/application/dto/perform.deposit.response.dto';
import { PerformTransferRequestDto } from '../command/application/dto/perform.transfer.request.dto';
import { PerformTransferResponseDto } from '../command/application/dto/perform.transfer.response.dto';
import { PerformWithdrawRequestDto } from '../command/application/dto/perform.withdraw.request.dto';
import { PerformWithdrawResponseDto } from '../command/application/dto/perform.withdraw.response.dto';
import { TransactionsService } from '../command/application/services/transactions.service';
import { TransactionTypeOrm } from '../command/infra/persistence/typeorm/entities/transaction.typeorm';
import { TransactionDto } from '../query/dto/transaction.dto';
import { TransactionsQuery } from '../query/queries/transactions.query';
export declare class TransactionsController {
    private transactionsCommand;
    private transactionsQuery;
    constructor(transactionsCommand: TransactionsService, transactionsQuery: TransactionsQuery);
    performDeposit(performDepositRequestDto: PerformDepositRequestDto, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformDepositResponseDto>;
    performWithdraw(performWithdrawRequestDto: PerformWithdrawRequestDto, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformWithdrawResponseDto>;
    performTransfer(performTransferRequestDto: PerformTransferRequestDto, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformTransferResponseDto>;
    getList(): Promise<TransactionDto[]>;
    getListByAccountId(accountId: number): Promise<TransactionDto[]>;
}
