import { AddCustomer } from '../commands/add.customer';
import { AddCustomerResponseDto } from '../dto/add.customer.response.dto';
import { DeleteCustomerResponseDto } from '../dto/delete.customer.response.dto';
export declare class CustomersService {
    constructor();
    add(addCustomer: AddCustomer): Promise<AddCustomerResponseDto>;
    delete(customerId: number): Promise<DeleteCustomerResponseDto>;
}
