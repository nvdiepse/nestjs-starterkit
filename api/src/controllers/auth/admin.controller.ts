import { Controller, Post } from '@nestjs/common';

@Controller('/v1/admin')
export class AdminController {
  constructor() {}

  @Post('/login')
  login() {}
}
