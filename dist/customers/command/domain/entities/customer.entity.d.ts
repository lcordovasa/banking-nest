export declare class Customer {
    private id;
    private firstName;
    private lastName;
    private isActive;
    private createdAt;
    private updatedAt;
    constructor(id: number, firstName: string, lastName: string, isActive: boolean, createdAt: string, updatedAt: string);
    static withId(id: number): Customer;
    getId(): number;
    getFirstName(): string;
    getLastName(): string;
    isIsActive(): boolean;
    getCreatedAt(): string;
    getUpdatedAt(): string;
}
