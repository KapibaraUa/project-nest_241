import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { HashHelper } from '../helpers/hash.helper.js';

@Module({
  controllers: [UserController],
  providers: [UserService, HashHelper],
})
export class UserModule {}
