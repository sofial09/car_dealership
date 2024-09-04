import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        /*  {
             id: uuid(),
             brand: 'Toyota',
             model: 'Corolla'
         }, {
             id: uuid(),
             brand: 'Honda',
             model: 'Civic'
         }, {
             id: uuid(),
             brand: 'Jeep',
             model: 'Cherokee'
         }, */
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id)
        if (!car) {
            throw new NotFoundException(`Car with id '${id}' not found`);
        }
        return car
    }

    create(createDTO: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            ...createDTO
        }
        this.cars.push(car);
        return car;
    }

    update(id: string, updateDTO: UpdateCarDTO) {
        let carDB = this.findOneById(id);
        if (updateDTO.id && updateDTO.id !== id)
            throw new BadRequestException('Error');

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateDTO, id }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        return;
    }

    fillCarsSeed(cars: Car[]) {
        this.cars = cars;
    }
}

