import { useEffect } from 'react';
import { siteConfig } from '../../data/site';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, any>;
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    const finalTitle = title || siteConfig.title;
    document.title = finalTitle;
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('name', 'twitter:title', finalTitle);

    // 2. Update Description
    const finalDescription = description || siteConfig.description;
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('name', 'twitter:description', finalDescription);

    // 3. Update Canonical URL
    const finalUrl = canonical || siteConfig.url;
    setCanonical(finalUrl);
    setMetaTag('property', 'og:url', finalUrl);

    // 4. Update Images
    const finalImage = ogImage || siteConfig.ogImage;
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('name', 'twitter:image', finalImage);

    // 5. Update other fixed metas
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', siteConfig.name);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 6. JSON-LD Schema
    if (schema) {
      setSchema(schema);
    }

    return () => {
      // Cleanup schema on unmount to avoid duplicates
      removeSchema();
    };
  }, [title, description, canonical, ogType, ogImage, schema]);

  return null;
}

// Helpers
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let element = document.querySelector(`link[rel="canonical"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setSchema(schema: Record<string, any>) {
  removeSchema(); // Clear existing
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('id', 'json-ld-schema');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function removeSchema() {
  const existing = document.getElementById('json-ld-schema');
  if (existing) {
    existing.remove();
  }
}
