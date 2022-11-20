import {
  Entity,
  // PrimaryGeneratedColumn,
  Column,
  // CreateDateColumn,
  // UpdateDateColumn,
  // DeleteDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { AbstractEntity } from "src/common/paginate/entities/abstract.entity";
import { Address } from '../address/entities/address.entity';
import { Phonenumber } from '../phoneNumber/entities/phonenumber.entity';
import { Exclude } from 'class-transformer';
import { Profile } from '../profile/entities/profile.entity';

@Entity()
export class User extends AbstractEntity {
  // @PrimaryGeneratedColumn()
  // public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public username: string;

  @Column(
    {
      type: 'varchar',
      length: 120,
      nullable: true
      // unique: true
    }
  )
  public email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 120 })
  public password: string;

  @OneToOne(() => Phonenumber,  phonenumber => phonenumber.user, {
    cascade: true
  })
  @JoinColumn()
  phonenumber: Phonenumber;

  @OneToOne(() => Profile,  (profile) => profile.user,{
      cascade: true
  })
  profile: Profile;

  @OneToMany(() => Address, address => address.user, {
    cascade: true
  })
  address: Address[];

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  addAddrress(address: Address) {
    if(this.address == null) {
      this.address = new Array<Address>();
    }
    this.address.push(address);
  }

}
