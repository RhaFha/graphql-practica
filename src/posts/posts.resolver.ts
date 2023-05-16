import { PostsService } from './posts.service';
import { Query, Mutation, Args, Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreateDto } from './dto/post-create.dto';

@Resolver()
export class PostsResolver {
  constructor(private postService: PostsService) {}
  @Query(() => [Post])
  post(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Mutation(() => Post)
  createPost(@Args('post') post: CreateDto) {
    return this.postService.createPost(post);
  }
}
