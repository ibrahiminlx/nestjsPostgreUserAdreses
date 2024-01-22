import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString({
    message:'String type field.'
  })
  @IsNotEmpty({
    message:'Required field.'
  })
  @Transform(({ value }) => value.trim())
  firstName:string

  @IsString({
    message:'String type field.'
  })
  @IsNotEmpty({
    message:'Required field.'
  })
  @Transform(({ value }) => value.trim())
  lastName:string

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
