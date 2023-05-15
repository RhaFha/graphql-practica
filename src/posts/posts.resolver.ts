import { Args, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Query } from '@nestjs/graphql';
import { Post } from './post.entity';

@Resolver()
export class PostsResolver {
  constructor(private postService: PostsService) {}
  @Query(() => [Post])
  post(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => Post)
  create(@Args('post', { type: () => Post }) post: Post): Promise<Post> {
    return this.postService.createPost(post);
  }
}
