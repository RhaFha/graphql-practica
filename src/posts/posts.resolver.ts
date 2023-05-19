import { PostsService } from './posts.service';
import { Query, Mutation, Args, Resolver, Int } from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreateDto } from './dto/post-create.dto';

@Resolver()
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

  @Mutation(() => Post)
  createPost(@Args('post') post: CreateDto) {
    return this.postService.createPost(post);
  }
}
