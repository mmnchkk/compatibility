import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompatibilityModuleModule } from './compatibility-module/compatibility-module.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [CompatibilityModuleModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
