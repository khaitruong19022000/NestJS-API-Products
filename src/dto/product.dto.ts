import { MinLength, IsNotEmpty, IsNumber, max, } from 'class-validator'

export class ProductDto {
    @IsNotEmpty({message: 'this field is required KhaiSpace !'})
    categoryId?: number;

    @IsNotEmpty({message: 'this field is required KhaiSpace !'})
    @MinLength(5, { message: 'This field must be at least 5 characters KhaiSpace !'})
    productName?: string;

    @IsNotEmpty({message: 'this field is required KhaiSpace !'})
    price?: number;
}