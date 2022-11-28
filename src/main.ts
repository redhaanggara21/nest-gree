import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiModule } from './api/api.module';
import { AppModule } from './app.module';
import { AppoloModule } from './appolo/appolo.module';
import { HttpExceptionFilter } from './common/exception-filter/http-exception.filter';
import { DomainModule } from './domain/domain.module';
import { setupSwagger } from './utill';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  app.useGlobalFilters(new HttpExceptionFilter())

  // setupSwagger(app);

  const options = new DocumentBuilder()
  .setTitle('API documents')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('ALL CONTROLLER')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [
      ApiModule,
      DomainModule,
      AppoloModule
    ],
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}

bootstrap();
