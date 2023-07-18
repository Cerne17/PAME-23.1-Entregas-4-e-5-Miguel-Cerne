import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  createdAt: Date;
}
