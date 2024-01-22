import { IsNotEmpty, IsUUID } from 'class-validator';


export class AddresesDeleteDto {



  @IsNotEmpty({
    message:'Required field.'
  })
  @IsUUID('1', {
    message: 'Invalid UUID1 format.',
  })
  addressId:string


}
