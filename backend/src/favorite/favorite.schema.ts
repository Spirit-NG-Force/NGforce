import { MongooseModule, Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()

export class Favorite {

@Prop()
idcompany : string;
@Prop()
iduser : string
@Prop()
name : string
@Prop()
title : string
@Prop()
description : string




}
export const Favoritechema = SchemaFactory.createForClass(Favorite)