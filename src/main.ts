import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//sudo aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 793615400543.dkr.ecr.ap-south-1.amazonaws.com
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
}
bootstrap();
