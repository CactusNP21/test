import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmthService } from './smth.service';
import { CreateSmthDto } from './dto/create-smth.dto';
import { UpdateSmthDto } from './dto/update-smth.dto';

@Controller('smth')
export class SmthController {
  constructor(private readonly smthService: SmthService) {}

  @Post()
  create(@Body() createSmthDto: CreateSmthDto) {
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
  update(@Param('id') id: string, @Body() updateSmthDto: UpdateSmthDto) {
    return this.smthService.update(+id, updateSmthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smthService.remove(+id);
  }
}
