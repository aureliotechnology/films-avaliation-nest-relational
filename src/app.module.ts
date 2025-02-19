import { Module } from '@nestjs/common';

import { MovieActorController } from './domain/ports/in/http/movie-actor.controller.port';
import { MovieActorService } from './domain/service/movie-actor.service';

@Module({
  imports: [],
  controllers: [MovieActorController],
  providers: [MovieActorService],
})
export class AppModule {}
