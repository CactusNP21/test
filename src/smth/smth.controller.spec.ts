import { Test, TestingModule } from '@nestjs/testing';
import { SmthController } from './smth.controller';
import { SmthService } from './smth.service';

describe('SmthController', () => {
  let controller: SmthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmthController],
      providers: [SmthService],
    }).compile();

    controller = module.get<SmthController>(SmthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
