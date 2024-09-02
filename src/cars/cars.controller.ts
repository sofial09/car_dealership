import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create_car.dto';
import { UpdateCarDTO } from './dto/update_car.dto';

@Controller('cars')
export class CarsController {

    //Injección de dependencias
    constructor(
        private readonly carservice: CarsService
    ) { }

    //Read
    @Get()
    getAllCars() {
        return this.carservice.findAll();
    }

    @Get(':id')
    getCarId(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id });
        return this.carservice.findOneById(id);
    }

    //Create
    @Post()
    //@UsePipes(ValidationPipe)
    createCar(@Body() createDTO: CreateCarDTO) {
        return this.carservice.create(createDTO);
    }

    //Update patch|put
    //PUT es utilizado para reemplazar completamente un documento en un servidor
    //PATCH aplica modificaciones parciles a un recurso (no requieren interacción del usuario)
    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateDTO: UpdateCarDTO) {
        return this.carservice.update(id, updateDTO);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carservice.delete(id)
    }
}
