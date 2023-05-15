import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
  @Query(() => String)
  helloWord(): string {
    return 'Hola mundo';
  }
}
