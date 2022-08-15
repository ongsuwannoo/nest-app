import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.zjqna.mongodb.net/nest?retryWrites=true&w=majority'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
