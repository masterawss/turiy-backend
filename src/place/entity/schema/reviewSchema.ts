import { Schema } from 'mongoose';
import { IReview } from '../types/Review';
import { Types } from 'mongoose';

export const ReviewSchemma = new Schema<IReview>({
  placeId: {
    type: String,
    required: true
  },
  comment: {
    type: Object,
  }
});

// PlaceSchemma.virtual('tasks', {
//   ref: 'Task',
//   localField: '_id',
//   foreignField: 'owner',
// });

// agregattes

// middlewares
// UserSchemma.pre('deleteOne', async function (next) {
//   const user = this.getFilter();
//   await TaskModel.deleteMany({ owner: user.id });
//   next();
// });

ReviewSchemma.set('toJSON', { virtuals: true });
ReviewSchemma.set('toObject', { virtuals: true });