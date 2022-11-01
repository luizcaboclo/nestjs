import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Dev Girls')
  .setDescription('Projeto Dev Girls')
  .setContact('Generation Brasil', 'www.genbr.com.br', 'luizcaboclo@gmail.com')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe ())
  app. enableCors()
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
