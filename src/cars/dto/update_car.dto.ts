import { IsOptional, IsString, IsUUID } from "class-validator";

//Data transfer object
export class UpdateCarDTO {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}
