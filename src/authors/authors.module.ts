import { Module, forwardRef } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { Author } from './entities/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';
// import { PostsModule } from 'src/posts/posts.module';
// import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    forwardRef(() => PostsModule),
    //AuthorsModule,
  ],
  providers: [AuthorsResolver, AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
