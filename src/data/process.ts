import { ProcessStep, Service } from '../types/process';

export const processSteps: ProcessStep[] = [
  {
    title: 'Initial Chat',
    description: 'A free, informal conversation — in person or by phone — to explore your ideas, budget, and what might be possible.',
  },
  {
    title: 'Site Visit & Brief',
    description: 'I visit the site, get to know how you live and what you need, then prepare a brief to guide the design.',
  },
  {
    title: 'Concept Design',
    description: 'Sketches and ideas to bring your project to life. We refine things together until it feels right.',
  },
  {
    title: 'Planning & Permissions',
    description: 'I prepare and submit drawings for planning or listed building consent, and liaise with the local authority on your behalf.',
  },
  {
    title: 'Detailed Design',
    description: 'More technical drawings and coordination with engineers or specialists as needed — ready for construction.',
  },
  {
    title: 'On-site Support',
    description: 'Help with choosing builders, reviewing quotes, and staying involved during the build — as much or as little as you need.',
  },
];

export const services: Service[] = [
  {
    name: 'Residential Design',
    description: 'I offer custom home design, renovations, and additions tailored to your lifestyle.',
  },
  {
    name: 'Commercial Architecture',
    description: 'I provide innovative and functional design for offices, retail spaces, and other commercial properties.',
  },
  {
    name: 'Feasibility Studies',
    description: 'I conduct a comprehensive analysis of your project\'s potential, including site evaluation, zoning research, and budget analysis.',
  },
  {
    name: 'Interior Design',
    description: 'I create cohesive and beautiful spaces through holistic interior design services.',
  },
];