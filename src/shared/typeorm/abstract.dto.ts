import { Exclude } from "class-transformer";
import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  public id: number;

  @Column({ type: 'boolean', default: true })
  public isActive: boolean;

  @CreateDateColumn(
    {type: 'timestamp', default: () => 'NOW()' }
  )
  @Exclude()
  public createdAt: Date;

  @DeleteDateColumn(
    {type: 'timestamp', default: () => 'NOW()' }
  )
  @Exclude()
  public deletedAt: Date;

  @UpdateDateColumn()
  @Exclude()
  public updatedAt: Date;
}
