import { CustomerTypeOrm } from '../../infra/persistence/typeorm/entities/customer.typeorm';
import { AddCustomerRequestDto } from '../dto/add.customer.request.dto';
import { AddCustomer } from '../commands/add.customer';
import { AddCustomerResponseDto } from '../dto/add.customer.response.dto';
import { Customer } from '../../domain/entities/customer.entity';
import { DeleteCustomerResponseDto } from '../dto/delete.customer.response.dto';
export declare class CustomerCommandMapper {
    static toAddCustomerCommand(addCustomerRequestDto: AddCustomerRequestDto): AddCustomer;
    static toCustomerTypeOrm(addCustomer: AddCustomer): CustomerTypeOrm;
    static toCustomerWithId(id: number): Customer;
    static toCustomerTypeOrmWithId(id: number): CustomerTypeOrm;
    static toAddCustomerResponseDto(customerTypeOrm: CustomerTypeOrm): AddCustomerResponseDto;
    static toDeleteCustomerResponseDto(customerTypeOrm: CustomerTypeOrm): DeleteCustomerResponseDto;
    static toEmptyDeleteCustomerResponseDto(): DeleteCustomerResponseDto;
}
