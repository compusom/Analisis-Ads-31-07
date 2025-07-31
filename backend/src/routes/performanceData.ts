import { Router } from 'express';
import PerformanceRecord from '../models/PerformanceRecord';

const router = Router();

router.get('/', async (_req, res) => {
  const data = await PerformanceRecord.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const record = new PerformanceRecord(req.body);
  await record.save();
  res.status(201).json(record);
});

export default router;
