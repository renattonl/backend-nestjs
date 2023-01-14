import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Metrics } from './metrics.entity';
import { Tribe } from './tribe.entity';
import { STATUS_ENUM, STATES_ENUM } from '../enums/index';

@Entity()
export class Repository {
  @PrimaryGeneratedColumn('increment')
  id_repository: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  id_tribe: number;

  @Column({
    type: 'character',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'character',
    length: 1,
    nullable: false,
  })
  state: STATES_ENUM;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: new Date(),
  })
  create_time: Date;

  @Column({
    type: 'character',
    length: 1,
    nullable: false,
  })
  status: STATUS_ENUM;

  @OneToOne(() => Metrics, (metrics) => metrics.repository)
  metrics: Metrics;

  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  @JoinColumn({
    name: 'id_tribe',
  })
  tribe: Tribe;
}
