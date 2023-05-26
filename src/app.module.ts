import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:1234@atlascluster.sqibxpa.mongodb.net/nest_db'), BookModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
