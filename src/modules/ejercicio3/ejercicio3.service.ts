import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Ejercicio1Service } from '../ejercicio1/ejercicio1.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Tribe } from './entities/tribe.entity';
import { Repository as RepositoryEntity } from './entities/repository.entity';
import { Between, MoreThan, Repository } from 'typeorm';
import { STATES_ENUM } from './enums';
import { STATES_TEXT_ENUM } from './enums/index';

@Injectable()
export class Ejercicio3Service {
  constructor(
    @InjectRepository(Tribe)
    private readonly repositoryTribe: Repository<Tribe>,
    @InjectRepository(RepositoryEntity)
    private readonly repositoryRepository: Repository<RepositoryEntity>,
    private readonly serviceEjercicio1: Ejercicio1Service,
  ) {}

  getDataRepositories(rows: RepositoryEntity[]) {
    const { repositories } = this.serviceEjercicio1.findAll();
    const data = [];
    for (const row of rows) {
      const obj = {
        id: row.id_repository,
        name: row.name,
        tribe: row.tribe.name,
        organization: row.tribe.organization.name,
        coverage: `${row.metrics.coverage.toFixed(2)}%`,
        codeSmells: row.metrics.code_smells,
        bugs: row.metrics.bugs,
        vulnerabilities: row.metrics.vulnerabilities,
        hotspots: row.metrics.hotspot,
        verificationState: '',
        state: STATES_TEXT_ENUM[row.state],
      };
      const item = repositories.find(({ id }) => id === row.id_repository);
      if (item) {
        obj.verificationState = item.code;
      }
      data.push(obj);
    }
    return { repositories: data };
  }

  async escenario1(id_tribe: number) {
    const currentYear: number = new Date().getFullYear();
    const tmpDate: number = new Date(currentYear, 12, 1).getTime();
    const lastDay: Date = new Date(tmpDate - 1);
    const rows = await this.repositoryRepository.find({
      where: [
        {
          id_tribe,
          state: STATES_ENUM.E,
          create_time: Between(new Date(currentYear, 0), lastDay),
          metrics: {
            coverage: MoreThan(75),
          },
        },
      ],
      relations: ['tribe', 'tribe.organization', 'metrics'],
    });
    return this.getDataRepositories(rows);
  }

  async escenario2(id_tribe: number) {
    const tribe = await this.repositoryTribe.findOne({
      where: {
        id_tribe,
      },
    });
    if (!tribe) {
      throw new NotFoundException('La Tribu no se encuentra registrada');
    }
    return tribe;
  }

  async escenario3(id_tribe: number) {
    const rows = await this.repositoryRepository.find({
      where: [
        {
          id_tribe,
        },
      ],
      relations: ['tribe', 'tribe.organization', 'metrics'],
    });
    return this.getDataRepositories(rows);
  }

  async escenario4(id_tribe: number) {
    const rows = await this.repositoryRepository.find({
      where: [
        {
          id_tribe,
          metrics: {
            coverage: MoreThan(75),
          },
        },
      ],
      relations: ['tribe', 'tribe.organization', 'metrics'],
    });
    if (!rows.length) {
      throw new BadRequestException(
        'La Tribu no tiene repositorios que cumplan con la cobertura necesaria',
      );
    }
    return this.getDataRepositories(rows);
  }
}
