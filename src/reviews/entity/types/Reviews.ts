import { Types } from 'mongoose';

export interface Reviews {
  id: ID;
  user?: string;
  review?: string;
}

export type ID = {
  _id: Types.ObjectId;
};

export type CreatePlace = Omit<Reviews, 'id'>;