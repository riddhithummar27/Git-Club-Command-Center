import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { profile: true }
    });
    // Format for frontend
    const members = users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role,
      avatar: u.avatarUrl,
      department: u.profile?.branch || 'Unknown',
      github: u.profile?.githubUrl,
      linkedin: u.profile?.linkedinUrl,
      bio: u.profile?.bio
    }));
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, role, department, github, linkedin, bio, avatar } = req.body;
    
    // Check if exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
       return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: 'pending', // Will implement proper auth later
        role: role || 'MEMBER',
        avatarUrl: avatar,
        profile: {
          create: {
            branch: department,
            githubUrl: github,
            linkedinUrl: linkedin,
            bio: bio
          }
        }
      },
      include: { profile: true }
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create member' });
  }
});

export default router;
