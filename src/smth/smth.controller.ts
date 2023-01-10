import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmthService } from './smth.service';

@Controller('smth')
export class SmthController {
  constructor(private readonly smthService: SmthService) {}

  @Post()
  create(@Body() createSmthDto: {}) {
    return this.smthService.create(createSmthDto);
  }

  @Get()
  findAll() {
    return this.smthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmthDto: {}) {
    return this.smthService.update(+id, updateSmthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smthService.remove(+id);
  }
}
