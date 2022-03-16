import { Types } from 'mongoose';

export interface IReview {
  id: ID;
  placeId: string;
  comment: {
      title: string,
      description: string,
      start: number
  }
}

export type ID = {
  _id: Types.ObjectId;
};



export type CreateReview = Omit<IReview, 'id'>;