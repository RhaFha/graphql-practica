import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  content: string;
}
