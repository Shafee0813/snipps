import { Schema, model, models, Model, Document } from 'mongoose';

// Define the interface for the post document
export interface IPost extends Document {
  creator: Schema.Types.ObjectId;
  title : string
  description : string;
  language: string;
  code: string;
}

// Define the schema
const PostSchema = new Schema<IPost>({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  description: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  language: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  code: {
    type: String,
    required: [true, 'Code is required.'],
  },
});

// Define the model with TypeScript support
const Post: Model<IPost> = models.Post || model<IPost>('Post', PostSchema);

export default Post;
