import { model, Schema } from 'mongoose';

const ActivitySchema = new Schema({
  type: String,
  date: Date,
});

export const Activity = model('Activity', ActivitySchema);
