import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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
