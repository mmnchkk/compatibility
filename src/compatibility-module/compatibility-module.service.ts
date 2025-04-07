import { Injectable, BadRequestException } from '@nestjs/common';
import { Compatibility } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CompatibilityModuleService {
  constructor(private prisma: PrismaService) {}

  async createCompatibility(data: {
    name1: string;
    gender1: string;
    name2: string;
    gender2: string;
    percent: number;
    image: string;
    description: string;
    userId: number;
  }): Promise<Compatibility> {
    // Проверяем, что userId не является undefined
    if (data.userId === undefined) {
      throw new BadRequestException('userId is required');
    }

    // Проверяем, существует ли пользователь с данным userId
    let user = await this.prisma.user.findUnique({
      where: { id: data.userId },
    });

    // Если пользователь не существует, создаем его
    if (!user) {
      user = await this.prisma.user.create({
        data: { id: data.userId },
      });
    }

    // Создаем новую запись в таблице emotion
    return this.prisma.compatibility.create({
      data: {
        name1: data.name1,
        gender1: data.gender1,
        name2: data.name2,
        gender2: data.gender2,
        percent: data.percent,
        image: data.image,
        description: data.description,
        userId: data.userId,
      },
    });
  }

  async getCompatibility(userId: number): Promise<Compatibility[]> {
    return this.prisma.compatibility.findMany({
      where: { userId: userId },
    });
  }

  async deleteCompatibility(id: number): Promise<void> {
    await this.prisma.compatibility.delete({
      where: { id },
    });
  }
}
