import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// GET all announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await prisma.announcement.findMany({
      include: { author: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
});

// POST new announcement
router.post('/', async (req, res) => {
  try {
    const { title, content, audience, authorId } = req.body;
    let author = authorId;
    
    if (!author) {
      const defaultUser = await prisma.user.findFirst();
      if (defaultUser) {
        author = defaultUser.id;
      } else {
        const u = await prisma.user.create({
          data: {
            name: 'Admin',
            email: 'admin@gitclub.local',
            passwordHash: 'dummy',
            role: 'ADMIN'
          }
        });
        author = u.id;
      }
    }

    const ann = await prisma.announcement.create({
      data: {
        title: title || 'Announcement',
        content: content || '',
        audience: audience || 'ALL',
        authorId: author,
        published: true
      },
      include: { author: true }
    });

    res.json(ann);
  } catch (error) {
    console.error('Error creating announcement:', error);
    res.status(500).json({ error: 'Failed to create announcement' });
  }
});

// DELETE announcement
router.delete('/:id', async (req, res) => {
  try {
    await prisma.announcement.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete announcement' });
  }
});

export default router;
