/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CurriculumPart {
  number: number;
  title: string;
  topics: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}
