import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class OneUserDto {
  @IsString({
    message:'String type field.'
  })
  @IsNotEmpty({
    message:'Required field.'
  })
  @IsEmail({},{
    message:'Please enter a valid email.'
  })
  email:string


}

export class OneAddressDto {
  @IsNotEmpty({
    message:'Required field.'
  })
  @IsUUID('1', {
    message: 'Invalid UUID1 format.',
  })
  addressId:string


}

