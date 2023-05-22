import { PostsService } from './posts.service';
import {
  Query,
  Mutation,
  Args,
  Resolver,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreateDto } from './dto/post-create.dto';
import { Author } from 'src/authors/entities/author.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postService: PostsService) {}
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postService.findAll();
  }
  @Query(() => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOnePostById(id);
  }

  @ResolveField(() => Author)
  author(@Parent() post: Post) {
    return this.postService.getAuthor(post.id);
  }

  @Mutation(() => Post)
  createPost(@Args('post') post: CreateDto) {
    return this.postService.createPost(post);
  }
}
