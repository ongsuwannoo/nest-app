import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Attractions, AttractionsDocument } from './schemas/attractions.schema';

@Injectable()
export class AttractionsService {
  constructor(@InjectModel(Attractions.name) private attractionModel: Model<AttractionsDocument>) {}

  async create(createAttractionDto: CreateAttractionDto): Promise<Attractions> {
    const createdCat = new this.attractionModel(createAttractionDto);
    return createdCat.save();
  }

  async findAll() {
    return this.attractionModel.find().exec();
  }

  async findOne(id: string): Promise<Attractions> {
    return this.attractionModel.findById(id).exec();
  }

  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return this.attractionModel.findByIdAndUpdate(id, updateAttractionDto).exec();
  }

  async remove(id: number) {
    const deletedCat = await this.attractionModel
      .findByIdAndRemove(id)
      .exec();
    return deletedCat;
  }
}
