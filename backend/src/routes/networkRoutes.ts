import express from 'express';
import NetworkModel from '../models/NetworkModel';

const router = express.Router();

// Enable CORS for all routes
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// GET all networks
router.get('/', async (req, res) => {
  try {
    const networks = await NetworkModel.find();
    res.json(networks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET network details by ID
router.get('/:id', async (req, res) => {
  try {
    const network = await NetworkModel.findById(req.params.id);
    if (!network) {
      return res.status(404).json({ message: 'Network not found' });
    }
    res.json(network);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT update network details by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNetwork = await NetworkModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedNetwork) {
      return res.status(404).json({ message: 'Network not found' });
    }
    res.json({ success: true, message: 'Network details updated successfully', updatedNetwork });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST optimization data
router.post('/optimize', async (req, res) => {
  try {
    // Handle optimization logic using req.body 
    // Example: const result = await optimizeFunction(req.body);
    res.json({ success: true, message: 'Optimization data processed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;