import { render, screen } from '@testing-library/react';
import AboutPage from './about';
import Head from 'next/head';
import React from 'react';

// Mock the implementation of next/head
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe('AboutPage', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    (Head as jest.Mock).mockClear();
  });

  it('renders the correct SEO and Open Graph metadata', () => {
    render(<AboutPage />);

    expect(Head).toHaveBeenCalledTimes(1);
    const headChildren = (Head as jest.Mock).mock.calls[0][0].children;

    // Helper to find a tag by type and props
    const findTag = (type: string, prop: string, value: string) =>
      headChildren.find(
        (child: React.ReactElement) =>
          child.type === type && (child.props as any)[prop] === value
      );

    // Check title
    const title = headChildren.find((child: React.ReactElement) => child.type === 'title');
    expect((title.props as any).children).toBe('About Me - Architect Portfolio');

    // Check meta description
    const metaDesc = findTag('meta', 'name', 'description');
    expect((metaDesc.props as any).content).toContain('Learn more about the architect');

    // Check Open Graph tags
    const ogTitle = findTag('meta', 'property', 'og:title');
    expect((ogTitle.props as any).content).toBe('About Me - Architect Portfolio');
    
    const ogImage = findTag('meta', 'property', 'og:image');
    expect((ogImage.props as any).content).toBeDefined();

    // Check JSON-LD script
    const jsonLdScript = headChildren.find(
      (child: React.ReactElement) => child.type === 'script'
    );
    expect(jsonLdScript.props.type).toBe('application/ld+json');
    const schema = JSON.parse(jsonLdScript.props.dangerouslySetInnerHTML.__html);
    expect(schema['@type']).toBe('Person');
    expect(schema.name).toBe('The Architect');
  });
});