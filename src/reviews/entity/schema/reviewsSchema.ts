import { Schema } from 'mongoose';
import { Reviews } from '../types/Reviews';


export const reviewsSchema = new Schema<Reviews>({
  guide: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  place: {
    type: Schema.Types.ObjectId,
    ref: 'Place',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  review: {
    type: String,
  },
  stars: {
    type: String,
  }
})

reviewsSchema.set('toJSON', { virtuals: true });
reviewsSchema.set('toObject', { virtuals: true });