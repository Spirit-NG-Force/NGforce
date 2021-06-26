import { MongooseModule, Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()

export class Follows {

@Prop()
iduser : string
@Prop()
idcompany : string




}
export const FollowsSchema = SchemaFactory.createForClass(Follows)