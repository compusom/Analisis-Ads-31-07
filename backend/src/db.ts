import mongoose from 'mongoose';

export async function connect(uri: string) {
  await mongoose.connect(uri);
}

export default mongoose;
