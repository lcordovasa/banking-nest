import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { Repository } from 'typeorm';
import { TransferDomainService } from '../../domain/services/transfer.domain.service';
import { TransactionTypeOrm } from '../../infra/persistence/typeorm/entities/transaction.typeorm';
import { PerformDeposit } from '../commands/perform.deposit';
import { PerformTransfer } from '../commands/perform.transfer';
import { PerformWithdraw } from '../commands/perform.withdraw';
import { PerformDepositResponseDto } from '../dto/perform.deposit.response.dto';
import { PerformTransferResponseDto } from '../dto/perform.transfer.response.dto';
import { PerformWithdrawResponseDto } from '../dto/perform.withdraw.response.dto';
export declare class TransactionsService {
    private transferDomainService;
    constructor(transferDomainService: TransferDomainService);
    performDeposit(performDeposit: PerformDeposit, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformDepositResponseDto>;
    performWithdraw(performWithdraw: PerformWithdraw, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformWithdrawResponseDto>;
    performTransfer(performTransfer: PerformTransfer, transactionRepository: Repository<TransactionTypeOrm>, accountRepository: Repository<AccountTypeOrm>): Promise<PerformTransferResponseDto>;
}
