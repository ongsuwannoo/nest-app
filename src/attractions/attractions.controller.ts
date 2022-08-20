import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Controller('attractions')
export class AttractionsController {
  constructor(private readonly attractionsService: AttractionsService) {}

  @Post()
  async create(@Body() createAttractionDto: CreateAttractionDto, @Body() createAttractionDtos: CreateAttractionDto[]) {
    if (createAttractionDtos.length > 0) {
      let arrayReturn = [];
      for (const createAttractionDto of createAttractionDtos) {
        arrayReturn.push(await this.attractionsService.create(createAttractionDto));
      }
      return arrayReturn;
    }
    return this.attractionsService.create(createAttractionDto);
  }

  @Get()
  findAll() {
    return this.attractionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attractionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttractionDto: UpdateAttractionDto) {
    return this.attractionsService.update(+id, updateAttractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attractionsService.remove(+id);
  }
}
