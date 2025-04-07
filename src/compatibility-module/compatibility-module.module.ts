import { Module } from '@nestjs/common';
import { CompatibilityModuleService } from './compatibility-module.service';
import { CompatibilityModuleController } from './compatibility-module.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CompatibilityModuleController],
  providers: [CompatibilityModuleService],
})
export class CompatibilityModuleModule {}
