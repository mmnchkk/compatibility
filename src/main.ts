import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //  Получаем NODE_ENV из environment variables
  const nodeEnv = process.env.NODE_ENV || 'development';

  // Настраиваем CORS в зависимости от окружения
  if (nodeEnv === 'production') {
    app.enableCors({
      origin: [
        'https://m.vk.com/app53265826',
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
  } else {
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
  }


  await app.listen(3000);
}
bootstrap();

