import { Router } from 'express';
import Client from '../models/Client';

const router = Router();

router.get('/', async (_req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

router.post('/', async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).json(client);
});

export default router;
