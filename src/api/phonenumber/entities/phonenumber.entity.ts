import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from "typeorm";
import { User } from '../../user/user.entity';

@Entity()
export class Phonenumber {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: number;

  @OneToOne(() => User, user => user.phonenumber)
  user: User;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  public deleteAt!: Date;
}
