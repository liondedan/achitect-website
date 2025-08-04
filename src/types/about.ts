export type ContentBlock =
  | {
      type: 'text';
      content: string;
    }
  | {
      type: 'image';
      url: string;
      altText: string;
    };

export interface AboutMe {
  contentBlocks: ContentBlock[];
}