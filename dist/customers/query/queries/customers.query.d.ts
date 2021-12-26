import { CustomerDto } from '../dto/customer.dto';
export declare class CustomersQuery {
    getById(customerId: number): Promise<CustomerDto>;
    getList(): Promise<CustomerDto[]>;
}
