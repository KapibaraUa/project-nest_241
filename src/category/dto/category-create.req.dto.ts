import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength,Length,Matches} from 'class-validator';
export class CategoryCreateReqDto {
  
  id: number;
  name: string;
  @IsString({message: 'Поле должно быть строкой'})
  @MinLength(5)
  @MaxLength(20)
  @Length(5,20,{message: "Поле должно быть от 5 до 20 символов"})
  title:string;
  image? : string;
  @IsNotEmpty({message:"Поле не должно быть пустое"})
  @MinLength(1)
  @MaxLength(30)
  @Matches(/^[a-z0-9\-_]+$/)
  slug:string;
  parent_id: number | null;
  @IsBoolean({message:"Поле должно быть true или false"})
  is_show: boolean;
  @IsString({message:"Поле должно быть строкой"})
  description:string;
}