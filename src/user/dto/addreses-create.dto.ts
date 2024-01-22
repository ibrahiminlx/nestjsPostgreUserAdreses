import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class AddresesCreateDto {
  @IsString({
    message:'String type field.'
  })
  @IsNotEmpty({
    message:'Required field.'
  })
  @Transform(({ value }) => value.trim())
  address:string



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
