import { IsString, MinLength } from "class-validator";

//Data transfer object
export class CreateCarDTO {

    @IsString()
    readonly brand: string;
    
    @IsString()
    @MinLength(3)
    readonly model: string;
}