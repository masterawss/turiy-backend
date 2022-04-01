import { model } from 'mongoose';
import { reviewsSchema } from '../schema/reviewsSchema';
import { Reviews } from '../types/Reviews';

export default model<Reviews>('reviews', reviewsSchema);