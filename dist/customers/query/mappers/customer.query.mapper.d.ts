import { CustomerDto } from '../dto/customer.dto';
export declare class CustomerQueryMapper {
    static toDtos(ormCustomers: []): CustomerDto[];
    static toDto(ormCustomer: any): CustomerDto;
    static toEmpty(): CustomerDto;
}
