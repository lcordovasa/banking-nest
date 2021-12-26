import { Repository } from 'typeorm';
import { LockAccountResponseDto } from '../command/application/dto/lock.account.response.dto';
import { OpenAccountRequestDto } from '../command/application/dto/open.account.request.dto';
import { OpenAccountResponseDto } from '../command/application/dto/open.account.response.dto';
import { AccountsService } from '../command/application/service/accounts.service';
import { AccountTypeOrm } from '../command/infra/persistence/typeorm/entities/account.typeorm';
import { AccountDto } from '../query/dto/account.dto';
import { AccountsQuery } from '../query/queries/accounts.query';
export declare class AccountsController {
    private accountsCommand;
    private accountsQuery;
    constructor(accountsCommand: AccountsService, accountsQuery: AccountsQuery);
    open(openAccountRequestDto: OpenAccountRequestDto, accountRepository: Repository<AccountTypeOrm>): Promise<OpenAccountResponseDto>;
    lock(accountId: number, accountRepository: Repository<AccountTypeOrm>): Promise<LockAccountResponseDto>;
    unlock(accountId: number, accountRepository: Repository<AccountTypeOrm>): Promise<LockAccountResponseDto>;
    getList(): Promise<AccountDto[]>;
    getById(accountId: number): Promise<AccountDto>;
}
