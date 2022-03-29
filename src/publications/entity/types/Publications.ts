import { Types } from 'mongoose';

export interface Publications {
  id: ID;
  title: string;
  date: string;
  description: string;
  imagenes: Array<any>;
  place: any
}

export type ID = {
  _id: Types.ObjectId;
};

export type CreatePublications = Omit<Publications, 'id'>;