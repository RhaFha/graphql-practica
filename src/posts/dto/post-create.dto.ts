import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Author } from 'src/authors/entities/author.entity';

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

  @IsInt()
  @IsNotEmpty()
  @Field()
  authorId: number;
}
