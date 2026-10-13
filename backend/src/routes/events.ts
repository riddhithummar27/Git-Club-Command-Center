import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        registrations: {
          include: { user: true }
        }
      },
      orderBy: { date: 'asc' }
    });

    // Map to frontend-friendly structure
    const formatted = events.map(evt => ({
      id: evt.id,
      name: evt.title,
      title: evt.title,
      desc: evt.description,
      description: evt.description,
      category: evt.category,
      date: evt.date.toISOString(),
      startDate: evt.date.toISOString(),
      endDate: evt.endTime || undefined,
      venue: evt.venue,
      link: evt.link || evt.venue,
      sheetLink: evt.sheetLink,
      capacity: evt.capacity,
      status: evt.status,
      poster: evt.poster,
      rounds: evt.rounds,
      audience: evt.audience,
      attendees: evt.registrations.map(r => ({
        id: r.user.id,
        name: r.user.name,
        email: r.user.email
      }))
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// GET event by ID
router.get('/:id', async (req, res) => {
  try {
    const evt = await prisma.event.findUnique({
      where: { id: req.params.id },
      include: {
        registrations: { include: { user: true } }
      }
    });
    if (!evt) return res.status(404).json({ error: 'Event not found' });

    res.json({
      id: evt.id,
      name: evt.title,
      title: evt.title,
      desc: evt.description,
      description: evt.description,
      category: evt.category,
      date: evt.date.toISOString(),
      endDate: evt.endTime || undefined,
      venue: evt.venue,
      link: evt.link || evt.venue,
      sheetLink: evt.sheetLink,
      capacity: evt.capacity,
      status: evt.status,
      poster: evt.poster,
      rounds: evt.rounds,
      audience: evt.audience,
      attendees: evt.registrations.map(r => ({
        id: r.user.id,
        name: r.user.name,
        email: r.user.email
      }))
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// POST new event
router.post('/', async (req, res) => {
  try {
    const defaultUser = await prisma.user.findFirst();
    let organizerId = defaultUser?.id;

    if (!organizerId) {
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

    const eventDate = new Date(req.body.date || req.body.startDate || new Date());

    const newEvent = await prisma.event.create({
      data: {
        title: req.body.name || req.body.title || 'Untitled Event',
        description: req.body.desc || req.body.description || '',
        category: req.body.category || 'Workshop',
        date: isNaN(eventDate.getTime()) ? new Date() : eventDate,
        startTime: req.body.startDate || eventDate.toISOString(),
        endTime: req.body.endDate || null,
        venue: req.body.link || req.body.venue || 'TBA',
        link: req.body.link || null,
        sheetLink: req.body.sheetLink || null,
        capacity: parseInt(req.body.capacity) || 100,
        status: req.body.status || 'PLANNING',
        poster: req.body.poster || null,
        rounds: req.body.rounds ? String(req.body.rounds) : null,
        audience: req.body.audience || 'All Students',
        organizerId: organizerId
      }
    });

    res.json({
      id: newEvent.id,
      name: newEvent.title,
      title: newEvent.title,
      desc: newEvent.description,
      description: newEvent.description,
      category: newEvent.category,
      date: newEvent.date.toISOString(),
      endDate: newEvent.endTime || undefined,
      link: newEvent.link,
      sheetLink: newEvent.sheetLink,
      capacity: newEvent.capacity,
      status: newEvent.status,
      poster: newEvent.poster,
      rounds: newEvent.rounds,
      audience: newEvent.audience
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// POST register for event
router.post('/:id/register', async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    
    // Find or create user
    let dbUser = null;
    if (user?.email) {
      dbUser = await prisma.user.findUnique({ where: { email: user.email } });
      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            name: user.name || 'Student',
            email: user.email,
            passwordHash: 'pending',
            role: 'MEMBER'
          }
        });
      }
    } else {
      dbUser = await prisma.user.findFirst();
    }

    if (!dbUser) {
      return res.status(400).json({ error: 'No user found or provided' });
    }

    // Register
    const reg = await prisma.eventRegistration.upsert({
      where: {
        eventId_userId: {
          eventId: id,
          userId: dbUser.id
        }
      },
      update: { status: 'REGISTERED' },
      create: {
        eventId: id,
        userId: dbUser.id,
        status: 'REGISTERED'
      }
    });

    res.json({ success: true, registration: reg });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to register for event' });
  }
});

// DELETE event
router.delete('/:id', async (req, res) => {
  try {
    await prisma.event.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

export default router;
