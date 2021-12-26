import { AccountDto } from '../dto/account.dto';
export declare class AccountQueryMapper {
    static toDtos(ormAccounts: []): AccountDto[];
    static toDto(ormAccount: any): AccountDto;
    static toEmpty(): AccountDto;
}
