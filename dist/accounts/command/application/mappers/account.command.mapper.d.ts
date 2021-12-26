import { BankAccount } from '../../domain/entities/account.entity';
import { AccountTypeOrm } from '../../infra/persistence/typeorm/entities/account.typeorm';
import { OpenAccount } from '../commands/open.account';
import { LockAccountResponseDto } from '../dto/lock.account.response.dto';
import { OpenAccountRequestDto } from '../dto/open.account.request.dto';
import { OpenAccountResponseDto } from '../dto/open.account.response.dto';
import { UnlockAccountResponseDto } from '../dto/unlock.account.response.dto';
export declare class AccountCommandMapper {
    static toOpenAccountCommand(openAccountRequestDto: OpenAccountRequestDto): OpenAccount;
    static toOpenAccountResponseDto(accountTypeOrm: AccountTypeOrm): OpenAccountResponseDto;
    static toBankAccount(accountTypeOrm: AccountTypeOrm): BankAccount;
    static toAccountTypeOrm(bankAccount: BankAccount): AccountTypeOrm;
    static toLockAccountResponseDto(accountTypeOrm: AccountTypeOrm): LockAccountResponseDto;
    static toEmptyLockAccountResponseDto(): LockAccountResponseDto;
    static toUnlockAccountResponseDto(accountTypeOrm: AccountTypeOrm): UnlockAccountResponseDto;
    static toEmptyUnlockAccountResponseDto(): UnlockAccountResponseDto;
}
