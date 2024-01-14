// server.ts
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://toluwanimidaramola8:vklHX8VH7YaV9F5Q@cluster0.gmpuoax.mongodb.net/';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });