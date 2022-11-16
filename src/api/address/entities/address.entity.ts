import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";
import { User } from '../../user/user.entity';
import { Profile } from 'src/api/profile/entities/profile.entity';
import { AbstractEntity } from "src/common/paginate/entities/abstract.entity";
@Entity()
export class Address extends AbstractEntity{

  // @PrimaryGeneratedColumn()
  // public id!: number;

  @Column({ type: 'varchar', length: 120 })
  @ApiProperty()
  public street: string;

  @Column({ type: 'varchar', length: 120 })
  @ApiProperty()
  public city: string;

  @Column({ type: 'varchar', length: 120 })
  @ApiProperty()
  public country: string;

  @Column({ nullable: true, type: "float", default: 0 })
  @ApiProperty()
  public user_id: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  // @CreateDateColumn({ type: 'timestamp' })
  // public createdAt!: Date;

  // @UpdateDateColumn({ type: 'timestamp' })
  // public updatedAt!: Date;

  // @DeleteDateColumn({ type: 'timestamp' })
  // public deletedAt!: Date;

  // @ManyToOne(() => User, (user: User) => user.address)
  // public user: User;
  @ManyToOne(type => User, user => user.address)
  @JoinColumn({
    name: 'user_id',
    // referencedColumnName: 'id'
  })
  user: User;

  // @OneToOne(() => Profile,  profile => profile.user, {
  //   cascade: true
  // })
  // @JoinColumn()
  // profile: Profile;
}
