import { AddCustomerRequestDto } from '../command/application/dto/add.customer.request.dto';
import { AddCustomerResponseDto } from '../command/application/dto/add.customer.response.dto';
import { DeleteCustomerResponseDto } from '../command/application/dto/delete.customer.response.dto';
import { CustomersService } from '../command/application/services/customers.service';
import { CustomerDto } from '../query/dto/customer.dto';
import { CustomersQuery } from '../query/queries/customers.query';
export declare class CustomersController {
    private customersCommand;
    private customersQuery;
    constructor(customersCommand: CustomersService, customersQuery: CustomersQuery);
    add(addCustomerRequestDto: AddCustomerRequestDto): Promise<AddCustomerResponseDto>;
    delete(customerId: number): Promise<DeleteCustomerResponseDto>;
    getList(): Promise<CustomerDto[]>;
    getById(customerId: number): Promise<CustomerDto>;
}
