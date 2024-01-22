import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsNumberString, IsString, Length, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @Transform(({ value }) => value.trim())
  firstName: string;

  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @Transform(({ value }) => value.trim())
  lastName: string;

  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @IsEmail({}, {
    message: 'Please enter a valid email.',
  })
  email: string;

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
  phoneNumber: string ;


  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @IsIn(['male', 'female'], {
    message: 'Gender must be either "male" or "female".',
  })
  gender: string;

  @IsString({
    message: 'String type field.',
  })
  @IsNotEmpty({
    message: 'Required field.',
  })
  @Length(6, 30, {
    message: 'Password must be between 6 and 30 characters long.',
  })
  password: string;


}
