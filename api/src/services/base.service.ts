import { Injectable } from '@nestjs/common';
import { BaseServiceInterface } from './interfaces/i.base.service';

@Injectable()
export class BaseService implements BaseServiceInterface {
  store(data: any) {
    return data;
  }
  updateById(id: any, data: any) {
    return id + data;
  }
  findOne(id: any) {
    return id;
  }
  deleteById(id: any) {
    return id;
  }
}
