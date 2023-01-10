import { Test, TestingModule } from '@nestjs/testing';
import { SmthService } from './smth.service';

describe('SmthService', () => {
  let service: SmthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmthService],
    }).compile();

    service = module.get<SmthService>(SmthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
