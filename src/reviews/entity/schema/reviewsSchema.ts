import { Schema } from 'mongoose';
import { Reviews } from '../types/Reviews';


export const reviewsSchema = new Schema<Reviews>({
  guide: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  review: {
    type: String,
  },
  star: {
    type: String,
  }
})

reviewsSchema.set('toJSON', { virtuals: true });
reviewsSchema.set('toObject', { virtuals: true });