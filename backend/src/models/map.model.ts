import { Schema, model } from "mongoose";

export interface Map {
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  stars: number;
  imageUr: string;
  producer: string;
}

export const mapSchema = new Schema<Map>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, required: false },
    stars: { type: Number, required: true },
    imageUr: { type: String, required: true },
    producer: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true
  }
);

export const MapModel = model<Map>('map', mapSchema);