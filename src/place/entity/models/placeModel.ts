import { model } from 'mongoose';
import { PlaceSchemma } from '../schema/placeSchema';
import { Place } from '../types/Place';

export default model<Place>('place', PlaceSchemma);