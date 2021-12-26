import { AccountDto } from '../dto/account.dto';
export declare class AccountsQuery {
    getById(accountId: number): Promise<AccountDto>;
    getList(): Promise<AccountDto[]>;
}
