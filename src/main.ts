import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exception-filter/http-exception.filter';
// import { HttpExceptionFilter } from './common/exception-filter/http-exception.filter';
import { setupSwagger } from './utill';
import * as nunjucks from 'nunjucks';
import { join } from 'path';

const ROOT_DIR: string = join(__dirname, '..');
const TYPE_MODE_BUILD : boolean = process.env.NODE_ENV === 'production' ? true : false;

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  const opts: nunjucks.ConfigureOptions = { express: app, autoescape: true, watch: !TYPE_MODE_BUILD, noCache: !TYPE_MODE_BUILD };

  nunjucks.configure(join(ROOT_DIR, TYPE_MODE_BUILD ? 'dist' : 'src'), opts);
  app.enableCors();
  app.set('trust proxy', 1);
  app.set('view engine', 'njk');

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  app.useGlobalFilters(new HttpExceptionFilter())

  app.enableCors();

  setupSwagger(app);

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'));
  });
}

bootstrap();
