import { Test, TestingModule } from '@nestjs/testing';
import { CompatibilityModuleService } from './compatibility-module.service';

describe('CompatibilityModuleService', () => {
  let service: CompatibilityModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompatibilityModuleService],
    }).compile();

    service = module.get<CompatibilityModuleService>(CompatibilityModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
