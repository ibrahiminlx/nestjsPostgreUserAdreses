import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';
import { UUID, UUIDV1 } from 'sequelize';

export class AddresesUpdateDto {
  @IsString({
    message:'String type field.'
  })
  @IsNotEmpty({
    message:'Required field.'
  })
  @Transform(({ value }) => value.trim())
  address:string

 


  @IsNotEmpty({
    message:'Required field.'
  })
  @IsUUID('1', {
    message: 'Invalid UUID1 format.',
  })
  addressId:string


}
