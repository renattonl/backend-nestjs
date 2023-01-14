import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Repository } from './repository.entity';
import { Organization } from '../../ejercicio2/entities/organization.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class Tribe {
  @PrimaryGeneratedColumn('increment')
  id_tribe: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
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

  @OneToMany(() => Repository, (repository) => repository.tribe)
  repositories: Repository[];

  @ManyToOne(() => Organization, (organization) => organization.tribes)
  @JoinColumn({
    name: 'id_organization',
  })
  organization: Organization;
}
