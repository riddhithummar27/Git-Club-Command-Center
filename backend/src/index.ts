import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Import routers
import authRouter from './routes/auth';
import eventsRouter from './routes/events';
import membersRouter from './routes/members';
import projectsRouter from './routes/projects';
import announcementsRouter from './routes/announcements';

dotenv.config();

const app = express();
export const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter);
app.use('/api/members', membersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/announcements', announcementsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
