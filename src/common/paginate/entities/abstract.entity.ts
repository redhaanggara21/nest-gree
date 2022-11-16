import { Exclude } from 'class-transformer';
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn,PrimaryGeneratedColumn,Column } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  public id: number;

  @Column({ type: 'boolean', default: true })
  @Exclude()
  public isActivated: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  @Exclude()
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Exclude()
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  @Exclude()
  public deletedAt!: Date;
}
