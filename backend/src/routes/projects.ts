import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        members: {
          include: { user: true }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// GET project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
      include: {
        members: {
          include: { user: true }
        }
      }
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// POST create project
router.post('/', async (req, res) => {
  try {
    const { name, description, category, status, progress, githubUrl, liveUrl, thumbnailUrl } = req.body;
    
    const newProject = await prisma.project.create({
      data: {
        name: name || 'Untitled Project',
        description: description || '',
        category: category || 'Web Development',
        status: status || 'ACTIVE',
        progress: typeof progress === 'number' ? progress : 0,
        githubUrl: githubUrl || null,
        liveUrl: liveUrl || null,
        thumbnailUrl: thumbnailUrl || null
      }
    });

    res.json(newProject);
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// PUT update project
router.put('/:id', async (req, res) => {
  try {
    const { name, description, category, status, progress, githubUrl, liveUrl, thumbnailUrl } = req.body;
    
    const updated = await prisma.project.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(category && { category }),
        ...(status && { status }),
        ...(progress !== undefined && { progress }),
        ...(githubUrl !== undefined && { githubUrl }),
        ...(liveUrl !== undefined && { liveUrl }),
        ...(thumbnailUrl !== undefined && { thumbnailUrl })
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// DELETE project
router.delete('/:id', async (req, res) => {
  try {
    await prisma.project.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

export default router;
