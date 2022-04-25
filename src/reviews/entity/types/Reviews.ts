import { Types } from 'mongoose';

export interface Reviews {
  id: ID;
  user?: any;
  guide?: any;
  place?: any;
  review?: string;
  stars?: string;
}

export type ID = {
  _id: Types.ObjectId;
};

export type CreatePlace = Omit<Reviews, 'id'>;