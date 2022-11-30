import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import Swagger from './libs/swagger.lib';
import helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(helmet());
  app.use(cookieParser());
  app.use(
    session({
      secret: 'your-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(csurf());

  const document = SwaggerModule.createDocument(app, Swagger.getInstance());
  SwaggerModule.setup('api/document/swagger.html', app, document);

  await app.listen(3000);
  console.log('App running: 3000');
}
bootstrap();
