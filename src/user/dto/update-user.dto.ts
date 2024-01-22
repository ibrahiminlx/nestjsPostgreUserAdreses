import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length } from 'class-validator';
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

  @Transform(({ value }) => value.toString())
  @IsNotEmpty({
    message: 'Phone number is required.',
  })
  @IsNumberString ({}, {
    message: 'Phone number must be a number.',
  })
  @Length(10, 10, {
    message: 'Phone number must be 10 digits long.',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  phoneNumber: string ;

  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @Length(6, 30, {
    message: 'Password must be between 6 and 30 characters long.',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  oldPassword?: string;
  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @Length(6, 30, {
    message: 'Password must be between 6 and 30 characters long.',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  newPassword?: string;

  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @IsIn(['male', 'female'], {
    message: 'Gender must be either "male" or "female".',
  })
  @Transform(({ value }) => value.trim())
  @IsOptional()
  gender?: string;







}
