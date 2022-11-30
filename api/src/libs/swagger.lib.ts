import { DocumentBuilder } from '@nestjs/swagger';

export default class Swagger {
  static _instance: any;
  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
    return this._instance;
  }
}
