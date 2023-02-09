import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema()
export class Route {
  @Prop()
  title: string;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  startPosition: { lat: Number; lng: number};

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
    }),
  )
  endPosition: { lat: Number; lng: number};
}

export const RouteSchema = SchemaFactory.createForClass(Route)

