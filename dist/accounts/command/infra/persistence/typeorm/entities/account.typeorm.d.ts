import { CustomerTypeOrm } from 'src/customers/command/infra/persistence/typeorm/entities/customer.typeorm';
export declare class AccountTypeOrm {
    id: number;
    number: string;
    balance: number;
    isLocked: boolean;
    customerId: number;
    customer: CustomerTypeOrm;
    createdAt: string;
    updatedAt: string;
}
