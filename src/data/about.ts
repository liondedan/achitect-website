import { AboutMe } from '../types/about';

export const aboutMeData: AboutMe = {
  contentBlocks: [
    {
      type: 'text',
      content:
        'I’ve worked in architecture for over 30 years. After studying in Cardiff and travelling across Europe to explore design and buildings, I began my career in Cambridge before returning to Pembrokeshire to set up my own practice — which I’ve run ever since.',
    },
    {
      type: 'image',
      url: '/profile-image.jpg',
      altText: 'A professional headshot of the architectural designer.',
    },
    {
      type: 'text',
      content:
        'Over the years, I’ve worked on everything from city flats and commercial projects to listed buildings and rural new-builds. But it’s the work with families and individuals that I find most rewarding — helping shape homes that are practical, personal, and built to last.',
    },
    {
      type: 'text',
      content:
        'Born and raised here in West Wales, I know the planning systems, the landscape, and the people. I’m a fluent Welsh speaker and work closely with local professionals and trades — helping move projects forward with confidence and care.',
    },
    {
      type: 'image',
      url: '/wales-local-builder-designer.jpg',
      altText: 'A picture of a local welsh builder designer',
    },
    {
      type: 'text',
      content:
        'Having designed and built several homes and extensions for myself, I also understand the process from a client’s perspective — the decisions, the costs, the excitement. If you’re planning something new, I’d love to help make it happen.',
    },
  ],
};