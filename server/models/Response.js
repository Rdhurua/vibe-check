import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  answers: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sessionId: String,
});

 const Response= mongoose.model('Response', responseSchema);
 export default Response;