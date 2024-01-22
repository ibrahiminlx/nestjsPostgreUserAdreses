import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Address } from './address.entity';
import { Col } from 'sequelize/types/utils';


@Table
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Unique(true)
  @Column
  email: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;

  @HasMany(()=>Address)
  addresses:Address[]

}
