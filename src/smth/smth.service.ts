import { Injectable } from '@nestjs/common';
import { CreateSmthDto } from './dto/create-smth.dto';
import { UpdateSmthDto } from './dto/update-smth.dto';

@Injectable()
export class SmthService {
  create(createSmthDto: CreateSmthDto) {
    return 'This action adds a new smth';
  }

  findAll() {
    return `This action returns all smth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smth`;
  }

  update(id: number, updateSmthDto: UpdateSmthDto) {
    return `This action updates a #${id} smth`;
  }

  remove(id: number) {
    return `This action removes a #${id} smth`;
  }
}
