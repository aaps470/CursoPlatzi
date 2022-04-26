// empezar un class-validator con minuscula es una funcion
// empezar un class-validator con mayuscula es un decorador

import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator'
import { AccessType, Category } from "../models/categoty.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{
}
export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;

}

(async () =>{
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'AndresPacheco';
    dto.image = 'https://api.escuelajs.co/api/v1/products'
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
