import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateUserDto {
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

  @IsString({
    message: 'String type field.',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  firstName?: string;

  @IsString({
    message: 'String type field.',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  lastName?: string;




}
