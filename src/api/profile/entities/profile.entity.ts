import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn
} from "typeorm";

import { User } from "src/api/user/user.entity";

@Entity()
export class Profile {

  @PrimaryGeneratedColumn()
  id:number;

  // @Column()
  // gender: string;

  @Column()
  photo: string;

  @Column()
  user_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  public deletedAt!: Date;

  @OneToOne(() => User, user => user.profile) // specify inverse side as a second parameter
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  // dont need statement join colum here because already join by table user
  user: User;
}
