
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionsController } from './attractions.controller';
import { AttractionsService } from './attractions.service';
import { Attractions, AttractionsSchema } from './schemas/attractions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Attractions.name, schema: AttractionsSchema }])],
  controllers: [AttractionsController],
  providers: [AttractionsService]
})
export class AttractionsModule {}
