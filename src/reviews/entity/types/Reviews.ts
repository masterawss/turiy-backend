import { Types } from 'mongoose';

export interface Reviews {
  id: ID;
  user?: any;
  guide?: any;
  review?: string;
  star?: string;
}

export type ID = {
  _id: Types.ObjectId;
};

export type CreatePlace = Omit<Reviews, 'id'>;