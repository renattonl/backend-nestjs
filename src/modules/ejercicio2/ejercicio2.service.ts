import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class Ejercicio2Service {
  constructor(
    @InjectRepository(Organization)
    private readonly repository: Repository<Organization>,
  ) {}

  create(createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
    const row = this.repository.create(createOrganizationDto);
    return this.repository.save(row);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id_organization: number) {
    const row = await this.repository.findOne({
      where: { id_organization },
    });
    if (!row) {
      throw new NotFoundException();
    }
    return row;
  }

  async update(
    id_organization: number,
    updateOrganizationDto: UpdateOrganizationDto,
  ) {
    const row: Organization = await this.repository.preload({
      id_organization,
      ...updateOrganizationDto,
    });
    if (!row) {
      throw new NotFoundException();
    }
    return row;
  }

  async remove(id_organization: number) {
    const row = await this.repository.findOne({
      where: { id_organization },
    });
    if (!row) {
      throw new NotFoundException();
    }
    return this.repository.remove(row);
  }
}
