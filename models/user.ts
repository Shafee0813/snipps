import { Schema, model, models, Model, Document } from 'mongoose';

// Define the interface for the User document
export interface IUser extends Document {
  email: string;
  username: string;
  image?: string; 
}

// Define the schema
const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

// Define the model with TypeScript support
const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);

export default User;
