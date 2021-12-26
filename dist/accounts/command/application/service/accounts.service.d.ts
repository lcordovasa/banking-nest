import { Repository } from 'typeorm';
import { AccountTypeOrm } from '../../infra/persistence/typeorm/entities/account.typeorm';
import { OpenAccount } from '../commands/open.account';
import { LockAccountResponseDto } from '../dto/lock.account.response.dto';
import { OpenAccountResponseDto } from '../dto/open.account.response.dto';
export declare class AccountsService {
    constructor();
    openAccount(openAccount: OpenAccount, accountRepository: Repository<AccountTypeOrm>): Promise<OpenAccountResponseDto>;
    lock(accountId: number, accountRepository: Repository<AccountTypeOrm>): Promise<LockAccountResponseDto>;
    unlock(accountId: number, accountRepository: Repository<AccountTypeOrm>): Promise<LockAccountResponseDto>;
}
