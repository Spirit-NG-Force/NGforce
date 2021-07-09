import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Favoritechema } from './favorite.schema';
@Module({
  imports: [ MongooseModule.forFeature([{ name: 'favorite', schema:  Favoritechema }]) ] ,
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
