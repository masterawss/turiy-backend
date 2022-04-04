import { Schema } from 'mongoose';
import { Reviews } from '../types/Reviews';


export const reviewsSchema = new Schema<Reviews>({
  user: {
    type: String
  },
  review: {
    type: String,
  }
})

reviewsSchema.set('toJSON', { virtuals: true });
reviewsSchema.set('toObject', { virtuals: true });