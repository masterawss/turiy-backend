import { Types } from 'mongoose';

export interface Publications {
  id: ID;
  userName: string;
  date: string;
  description: string;
  imagenes: Array<any>;
  placeId: any
}

export type ID = {
  _id: Types.ObjectId;
};

export type CreatePublications = Omit<Publications, 'id'>;