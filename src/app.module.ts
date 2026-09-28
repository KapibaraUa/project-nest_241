import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CategoryModule } from './category/category.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:
  
  [
  TypeOrmModule.forRoot({
    type:'postgres',
    host:'',
    port:27544  ,
    username:'avnadmin',
    password:'',
    database:'defaultdb',
    autoLoadEntities : true
  }),
  CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
