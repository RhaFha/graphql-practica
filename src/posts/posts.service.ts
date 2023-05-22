import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/post-create.dto';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRespository: Repository<Post>,
    private authorService: AuthorsService,
  ) {}
  async findAll(): Promise<Post[]> {
    return await this.postRespository.find();
  }

  async findOnePostById(id: number): Promise<Post> {
    return this.postRespository.findOne({
      where: {
        id,
      },
    });
  }

  async createPost(post: CreateDto): Promise<Post> {
    const newPost = this.postRespository.create(post);
    return this.postRespository.save(newPost);
  }

  async getAuthor(authorId: number): Promise<Author> {
    return this.authorService.findOne(authorId);
  }
}
