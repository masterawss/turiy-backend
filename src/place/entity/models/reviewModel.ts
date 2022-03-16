import { model } from 'mongoose';
import { ReviewSchemma } from '../schema/reviewSchema';
import { IReview } from '../types/Review';

export default model<IReview>('reviewsPlace', ReviewSchemma);