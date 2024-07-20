import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from './entities/route.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>,
  ) {}

  async create(createRouteDto: CreateRouteDto) {
    const newModule = this.routeRepository.create(createRouteDto);
    return await this.routeRepository.save(newModule);
  }

  async findAll() {
    return await this.routeRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  async remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
