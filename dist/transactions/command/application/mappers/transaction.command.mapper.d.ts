import { PerformTransferRequestDto } from '../dto/perform.transfer.request.dto';
import { PerformTransfer } from '../commands/perform.transfer';
import { TransactionTypeOrm } from '../../infra/persistence/typeorm/entities/transaction.typeorm';
import { PerformTransferResponseDto } from '../dto/perform.transfer.response.dto';
import { PerformDepositRequestDto } from '../dto/perform.deposit.request.dto';
import { PerformDeposit } from '../commands/perform.deposit';
import { PerformDepositResponseDto } from '../dto/perform.deposit.response.dto';
import { PerformWithdraw } from '../commands/perform.withdraw';
import { PerformWithdrawRequestDto } from '../dto/perform.withdraw.request.dto';
import { PerformWithdrawResponseDto } from '../dto/perform.withdraw.response.dto';
export declare class TransactionCommandMapper {
    static toPerformDepositCommand(performDepositRequestDto: PerformDepositRequestDto): PerformDeposit;
    static toPerformDepositResponseDto(transactionTypeOrm: TransactionTypeOrm): PerformDepositResponseDto;
    static toPerformWithdrawCommand(performWithdrawRequestDto: PerformWithdrawRequestDto): PerformWithdraw;
    static toPerformWithdrawResponseDto(transactionTypeOrm: TransactionTypeOrm): PerformWithdrawResponseDto;
    static toPerformTransferCommand(performTransferRequestDto: PerformTransferRequestDto): PerformTransfer;
    static toPerformTransferResponseDto(transactionTypeOrm: TransactionTypeOrm): PerformTransferResponseDto;
}
