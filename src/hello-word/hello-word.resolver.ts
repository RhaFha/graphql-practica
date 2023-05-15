import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
  @Query(() => String, {
    name: 'hola',
    description: 'Hola mundo es lo que retorna',
  })
  helloWord(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroTo' })
  ramdomFromZeroTo(
    @Args('max', { type: () => Int, nullable: true }) max = 6,
  ): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
