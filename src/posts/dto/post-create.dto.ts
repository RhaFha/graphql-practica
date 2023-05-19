import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDto {
  @Field()
  @IsString({
    message: 'Tiene que ser string',
  })
  @IsNotEmpty()
  title: string;

  @Field({ nullable: true })
  content?: string;
}
