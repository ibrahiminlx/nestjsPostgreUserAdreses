import { User } from '../Models/user.entity';


export const userProviders=[{
  provide:'USER_REPOSITORY',
  useValue:User
}]
