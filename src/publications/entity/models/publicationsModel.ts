import { model } from 'mongoose';
import { PublicationsSchemma } from '../schema/publicationsSchema';
import { Publications } from '../types/Publications';

export default model<Publications>('publications', PublicationsSchemma);