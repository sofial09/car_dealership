import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) { }

  populateDB() {
    this.carsService.fillCarsSeed(CARS_SEED);
   this.brandService.fillBrandSeed(BRAND_SEED)
    return 'SEED EXECUTED';
  }
}
