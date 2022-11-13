import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm';

@Entity()
export class Address {

  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120 })
  public street: string;

  @Column({ type: 'varchar', length: 120 })
  public city: string;

  @Column({ type: 'varchar', length: 120 })
  public country: string;

  @Column({ nullable: false, type: "float", default: 0.0 })
  public userId: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  public deleteAt!: Date;
}
