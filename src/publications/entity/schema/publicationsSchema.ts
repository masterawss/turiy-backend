import { Schema } from 'mongoose';
import { Publications } from '../types/Publications';
import { Types } from 'mongoose';

export const PublicationsSchemma = new Schema<Publications>({
  title: {
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
  }
});

PublicationsSchemma.set('toJSON', { virtuals: true });
PublicationsSchemma.set('toObject', { virtuals: true });