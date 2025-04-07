import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { CompatibilityModuleService } from './compatibility-module.service';
import { Compatibility } from '@prisma/client';

@Controller('compatibility-module')
export class CompatibilityModuleController {
  constructor(
    private readonly compatibilityModuleService: CompatibilityModuleService,
  ) {}

  @Post()
  async createCompatibility(
    @Body()
    data: {
      name1: string;
      gender1: string;
      name2: string;
      gender2: string;
      percent: number;
      image: string;
      description: string;
      userId: number;
    },
  ): Promise<Compatibility> {
    return this.compatibilityModuleService.createCompatibility(data);
  }

  @Get(':userId')
  async getCompatibility(
    @Param('userId') userId: string,
  ): Promise<Compatibility[]> {
    const compatibilityId = Number(userId);
    if (isNaN(compatibilityId)) {
      throw new BadRequestException('Invalid ID');
    }
    return this.compatibilityModuleService.getCompatibility(compatibilityId);
  }

  @Delete(':id')
  async deleteCompatibility(
    @Param('id') id: string,
  ): Promise<{ message: string }> {
    const compatibilityId = Number(id);
    if (isNaN(compatibilityId)) {
      throw new BadRequestException('Invalid ID');
    }
    await this.compatibilityModuleService.deleteCompatibility(compatibilityId);
    return { message: 'Compatibility deleted successfully' };
  }
}
