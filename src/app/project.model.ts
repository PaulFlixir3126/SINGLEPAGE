// src/app/project.model.ts
export interface Credential {
  role: string;
  username: string;
  password: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
  imageUrl: string; // URL for the card image
  credentials: Credential[];
}