/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Pattern {
  id: string;
  name: string;
  description: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado" | "Fácil" | "Medio";
  height: string;
  hookSize: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatarColor: string;
  projectDescription: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pagos" | "Contenido" | "Soporte";
}

export interface Lesson {
  id: string;
  module: string;
  title: string;
  duration: string;
  description: string;
  completed?: boolean;
}
