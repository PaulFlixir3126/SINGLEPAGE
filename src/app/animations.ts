// src/app/animations.ts
import { animation, style, animate, keyframes } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{time}}', style({ opacity: 1 }))
]);

export const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }),
  animate('{{time}} ease-out', style({ opacity: 1, transform: 'scale(1)' }))
]);