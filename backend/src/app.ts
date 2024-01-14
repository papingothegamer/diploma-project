import express from 'express';
import cors from 'cors'; // Import cors middleware
import networkRoutes from './routes/networkRoutes';

const app = express();

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use('/networks', networkRoutes);

app.get('/', (_, res) => {
  res.json({ message: 'Hello, this is your server responding!' });
});

export default app;