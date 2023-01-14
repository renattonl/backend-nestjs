import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tribe } from '../../ejercicio3/entities/tribe.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('increment')
  id_organization: number;

  @Column({
    type: 'character',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.organization)
  tribes: Tribe[];
}
