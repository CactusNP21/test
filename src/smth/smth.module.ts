import { Module } from '@nestjs/common';
import { SmthService } from './smth.service';
import { SmthController } from './smth.controller';

@Module({
  controllers: [SmthController],
  providers: [SmthService]
})
export class SmthModule {}
