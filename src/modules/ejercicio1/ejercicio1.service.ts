import { Injectable } from '@nestjs/common';
import { CODES } from './const';
import { repositoriesMock } from './mocks';
import { Repository } from './entities/repository.entity';

@Injectable()
export class Ejercicio1Service {
  private repositories: Repository[] = repositoriesMock;

  findAll() {
    const repositories = this.repositories.map((item) => {
      const code = CODES[item.state] || '';
      return { ...item, code };
    });
    return { repositories };
  }
}
