import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// POST new event
router.post('/', async (req, res) => {
  try {
    // Basic placeholder organizer logic until auth is fully implemented
    const defaultUser = await prisma.user.findFirst();
    let organizerId = defaultUser?.id;
    
    if (!organizerId) {
      // Create a dummy admin user if none exists
      const newUser = await prisma.user.create({
        data: {
          name: 'Admin',
          email: 'admin@gitclub.local',
          passwordHash: 'dummy',
          role: 'ADMIN'
        }
      });
      organizerId = newUser.id;
    }

    const newEvent = await prisma.event.create({
      data: {
        title: req.body.name || req.body.title,
        description: req.body.desc || req.body.description || '',
        category: req.body.category || 'Workshop',
        date: new Date(req.body.date || req.body.startDate || new Date()),
        startTime: new Date(req.body.date || req.body.startDate || new Date()).toISOString(),
        endTime: new Date(req.body.endDate || new Date()).toISOString(),
        venue: req.body.link || req.body.venue || 'TBA',
        capacity: parseInt(req.body.capacity) || 100,
        status: req.body.status || 'UPCOMING',
        organizerId: organizerId
      }
    });
    res.json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

export default router;
