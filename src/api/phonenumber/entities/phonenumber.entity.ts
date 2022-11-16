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
import { AbstractEntity } from "src/common/paginate/entities/abstract.entity";

@Entity()
export class Phonenumber extends AbstractEntity {

  // @PrimaryGeneratedColumn()
  // public id: number;

  @Column()
  public phoneNumber: number;

  @Column({ nullable: true, type: "float", default: 0 })
  public user_id: number;

  @OneToOne(() => User, user => user.phonenumber)
  public user: User;

  // @CreateDateColumn({ type: 'timestamp' })
  // public createdAt!: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  // public updatedAt!: Date;

  // @DeleteDateColumn({ type: 'timestamp' })
  // public deletedAt!: Date;
}
