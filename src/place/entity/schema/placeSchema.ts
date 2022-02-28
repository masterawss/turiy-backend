import { Schema } from 'mongoose';
import { Place } from '../types/Place';
import { Types } from 'mongoose';

export const PlaceSchemma = new Schema<Place>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  extraInfo: {
    type: String,
  },
  categories: {
    type: Array,
  },
  images: {
    type: Array,
  },
  stars: {
    type: Number,
  },
  coordinates: {
    type: Object,
    required: true
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

PlaceSchemma.set('toJSON', { virtuals: true });
PlaceSchemma.set('toObject', { virtuals: true });