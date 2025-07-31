import mongoose, { Schema } from 'mongoose';

const ClientSchema = new Schema({
  name: { type: String, required: true },
  logo: String,
  currency: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  metaAccountName: String
});

export default mongoose.model('Client', ClientSchema);
