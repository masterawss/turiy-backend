import { Types } from 'mongoose';

export interface Place {
  id: ID;
  title: string;
  description?: string;
  extraInfo?: string;

  categories?: Array<string>;
  images?: Array<string>;
  stars: number;

  coordinates: CoordinateType;

  guides: any;
}

export type ID = {
  _id: Types.ObjectId;
};

export type CoordinateType = {
  lat: number,
  lng: number
};

export type CreatePlace = Omit<Place, 'id' | 'stars'>;