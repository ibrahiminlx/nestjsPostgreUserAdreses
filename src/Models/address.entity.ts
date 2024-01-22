import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class Address extends Model<Address> {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  id: string;

  @ForeignKey(()=>User)
  @AllowNull(false)
  @Column({
    type:DataType.UUID
  })
  userId: string;

  @AllowNull(false)
  @Column
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;


  @BelongsTo(()=>User)
  user:User

}
