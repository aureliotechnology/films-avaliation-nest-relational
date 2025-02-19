import { Module } from '@nestjs/common';
import { MovieActorController } from 'src/domain/ports/in/http/movie-actor.controller.port';
import { MovieActorService } from 'src/domain/service/movie-actor.service';

@Module({
  imports: [],
  controllers: [MovieActorController],
  providers: [MovieActorService],
})
export class AppModule {}
