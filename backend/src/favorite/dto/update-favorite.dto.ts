import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteDto } from './create-favorite.dto';

export class UpdateFavoriteDto extends PartialType(CreateFavoriteDto) {
idcompany : string;
iduser : string
name : string;
title : string;
description : string

}
