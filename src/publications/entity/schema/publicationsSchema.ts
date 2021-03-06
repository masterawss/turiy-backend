import { Schema } from 'mongoose';
import { Publications } from '../types/Publications';
import { Types } from 'mongoose';
import mongoose from 'mongoose';

export const PublicationsSchemma = new Schema<Publications>({
  userName: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  imagenes: {
    type: [],
  },
  placeId: {
    type: Schema.Types.ObjectId,
    ref: 'places'
  }
});

PublicationsSchemma.set('toJSON', { virtuals: true });
PublicationsSchemma.set('toObject', { virtuals: true });