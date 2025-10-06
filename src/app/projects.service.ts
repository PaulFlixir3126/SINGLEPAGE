// src/app/projects.service.ts
import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    // --- ADD YOUR 30 PROJECTS HERE ---
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce site built with Angular and Node.js, supporting various payment gateways.',
      projectUrl: 'https://example-ecommerce.com',
      imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEzfHx3ZWJzaXRlfGVufDB8fHx8MTY5NjQ4ODMxN3ww&ixlib=rb-4.0.3&q=80&w=400',
      credentials: [
        { role: 'Admin User', username: 'admin@example.com', password: 'AdminPassword123' },
        { role: 'Customer User', username: 'customer@example.com', password: 'CustomerPassword123' }
      ]
    },
    {
      id: 2,
      title: 'Project Management Tool',
      description: 'A Kanban-style project management application for teams.',
      projectUrl: 'https://example-kanban.com',
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEwfHx3b3Jrc3BhY2V8ZW58MHx8fHwxNjk2NDg4MzUxfDA&ixlib=rb-4.0.3&q=80&w=400',
      credentials: [
        { role: 'Team Lead', username: 'lead@example.com', password: 'LeadPassword456' }
      ]
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media engagement.',
      projectUrl: 'https://example-social.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fGRhc2hib2FyZHxlbnwwfHx8fDE2OTY0ODgzNzd8MA&ixlib=rb-4.0.3&q=80&w=400',
      credentials: [
        { role: 'Manager', username: 'manager@example.com', password: 'ManagerPass789' }
      ]
    } ,   {
      id: 4,
      title: ' Media Dashboard',
      description: 'Analytics dashboard for tracking social media engagement.',
      projectUrl: 'https://example-social.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fGRhc2hib2FyZHxlbnwwfHx8fDE2OTY0ODgzNzd8MA&ixlib=rb-4.0.3&q=80&w=400',
      credentials: [
        { role: 'Manager', username: 'manager@example.com', password: 'ManagerPass789' }
      ]
    },
        {
      id: 5,
      title: '  Dashboard',
      description: 'Analytics dashboard for tracking social media engagement.',
      projectUrl: 'https://example-social.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDR8fGRhc2hib2FyZHxlbnwwfHx8fDE2OTY0ODgzNzd8MA&ixlib=rb-4.0.3&q=80&w=400',
      credentials: [
        { role: 'Manager', username: 'manager@example.com', password: 'ManagerPass789' }
      ]
    }
    // Add more projects...
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}