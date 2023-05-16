import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/post-create.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRespository: Repository<Post>,
  ) {}
  async findAll(): Promise<Post[]> {
    return await this.postRespository.find();
  }

  async createPost(post: CreateDto): Promise<Post> {
    const newPost = this.postRespository.create(post);
    return this.postRespository.save(newPost);
  }
}
