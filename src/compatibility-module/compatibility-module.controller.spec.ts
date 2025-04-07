import { Test, TestingModule } from '@nestjs/testing';
import { CompatibilityModuleController } from './compatibility-module.controller';

describe('CompatibilityModuleController', () => {
  let controller: CompatibilityModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompatibilityModuleController],
    }).compile();

    controller = module.get<CompatibilityModuleController>(CompatibilityModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
