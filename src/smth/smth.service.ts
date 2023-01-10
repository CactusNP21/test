import { Injectable } from '@nestjs/common';


@Injectable()
export class SmthService {
  create(createSmthDto: {}) {
    return 'This action adds a new smth';
  }

  findAll() {
    return `This action returns all smth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smth`;
  }

  update(id: number, updateSmthDto: {}) {
    return `This action updates a #${id} smth`;
  }

  remove(id: number) {
    return `This action removes a #${id} smth`;
  }
}
