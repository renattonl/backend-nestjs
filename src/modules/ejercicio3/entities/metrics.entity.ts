import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Repository } from './repository.entity';

@Entity()
export class Metrics {
  @PrimaryColumn({
    nullable: false,
  })
  id_repository: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  coverage: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  bugs: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  vulnerabilities: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  hotspot: number;

  @Column({
    type: 'integer',
    nullable: false,
  })
  code_smells: number;

  @OneToOne(() => Repository)
  @JoinColumn({
    name: 'id_repository',
  })
  repository: Repository;
}
