import { profile } from 'console';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Address } from '../address/entities/address.entity';
import { Phonenumber } from '../phoneNumber/entities/phonenumber.entity';
import { Exclude } from 'class-transformer';
import { Profile } from '../profile/entities/profile.entity';



@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

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

  @Column({ type: 'varchar', length: 120 })
  public password: string;

  @Column({ type: 'boolean', default: true })
  public isActivated: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  public deletedAt!: Date;

  // @OneToMany(() => Address, (address) => address)
  // address: Address[]

  // @OneToMany(() => Address, address => address.userId, {
  //   cascade: true
  // })
  // // @JoinColumn({ name: 'userId' })
  // address: Address[];

  // @ManyToOne(() => gender, (gender) => gender.photos)
  // @JoinColumn({ name: 'gender_id' })
  // gender: gender;


  // @OneToMany(() => Address, (address) => address.user)
  // address: Address[];
  // @OneToOne(() => Address, {
  //   eager: true,
  //   cascade: true
  // })
  // @JoinColumn()
  // public address: Address;

  // @OneToMany(type => Address, Address => Address)
  // @JoinColumn({
  //   name: "userId",
  //   referencedColumnName: "id"
  // })
  // address: Address[];

  // @OneToMany(type => Address, address => address.id)

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
