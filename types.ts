import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Differentiator {
  id: number;
  text: string;
}

export type ButtonVariant = 'primary' | 'outline' | 'white';
