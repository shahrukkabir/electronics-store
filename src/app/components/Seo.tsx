import { useEffect } from 'react';
import { useLocation } from 'react-router';
import logo from '../../imports/logo.png';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
  robots?: string;
  keywords?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'Electronics Store';
const DEFAULT_DESCRIPTION =
  'Shop affordable electronics, gadgets, and daily-use tech products with fast delivery across Bangladesh.';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function Seo({
  title,
  description,
  image,
  type = 'website',
  robots = 'index, follow',
  keywords,
  structuredData,
}: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const currentUrl = `${window.location.origin}${location.pathname}`;
    const imageUrl = new URL(image ?? logo, window.location.origin).toString();
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta('name', 'description', description || DEFAULT_DESCRIPTION);
    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'theme-color', '#4640c2');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description || DEFAULT_DESCRIPTION);
    upsertMeta('property', 'og:url', currentUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description || DEFAULT_DESCRIPTION);
    upsertMeta('name', 'twitter:image', imageUrl);

    if (keywords) {
      upsertMeta('name', 'keywords', keywords);
    }

    upsertLink('canonical', currentUrl);

    const existingScript = document.getElementById('seo-structured-data');

    if (structuredData) {
      const script = existingScript ?? document.createElement('script');
      script.id = 'seo-structured-data';
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(structuredData);

      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [description, image, keywords, location.pathname, robots, structuredData, title, type]);

  return null;
}
