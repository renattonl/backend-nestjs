import { Injectable } from '@nestjs/common';
import { CODES } from './const';
import { Repository } from './entities/repository.entity';

@Injectable()
export class RepositoriesService {
  private repositories: Repository[] = [
    { id: 1, state: 604 },
    { id: 2, state: 605 },
    { id: 3, state: 606 },
  ];

  findAll() {
    return this.repositories.map((item) => {
      const code = CODES[item.state] || '';
      return { ...item, code };
    });
  }
}
