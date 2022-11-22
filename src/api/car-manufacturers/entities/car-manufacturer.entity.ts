import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class CarManufacturer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
