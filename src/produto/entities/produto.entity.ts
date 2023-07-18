import { Column, Entity } from 'typeorm';

@Entity()
export class Produto {
  @Column()
  name: string;
  @Column()
  quantity: number;
  @Column()
  status: string; // encomendado/ entregue/ em estoque/ em falta
  @Column()
  expireDate: Date;
  @Column()
  createdAt: Date;
}
