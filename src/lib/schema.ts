export const SITE_URL = 'https://www.shelbywebco.com/';
export const ORG_ID = 'https://www.shelbywebco.com/#organization';
export const LOCAL_BUSINESS_ID = 'https://www.shelbywebco.com/#localbusiness';
export const WEBSITE_ID = 'https://www.shelbywebco.com/#website';
export const PHONE = '(704) 473-8188';
export const EMAIL = 'dave@shelbywebco.com';

export const BUSINESS_DESCRIPTION =
  'Shelby Web Company is a non-exclusive local web design, SEO, branding, and custom digital agency in Shelby, NC. We build hand-coded, performance-first websites and local SEO systems for service businesses across Western North Carolina.';

export const SAME_AS = [
  'https://www.facebook.com/profile.php?id=61591509287089',
  'https://www.linkedin.com/in/dave-richardson-57615329b',
  'https://www.google.com/maps/place/Shelby+Web+Company',
];

export const SERVICE_AREAS = [
  { '@type': 'City', name: 'Shelby, NC' },
  { '@type': 'City', name: 'Kings Mountain, NC' },
  { '@type': 'City', name: 'Gastonia, NC' },
  { '@type': 'City', name: 'Forest City, NC' },
  { '@type': 'City', name: 'Boiling Springs, NC' },
  { '@type': 'City', name: 'Polkville, NC' },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path.endsWith('/') || path.includes('.') ? path : `${path}/`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withSlash = clean.endsWith('/') ? clean : `${clean}/`;
  return `${SITE_URL.replace(/\/$/, '')}${withSlash}`;
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  const list = [{ name: 'Home', url: SITE_URL }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  areaName: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design & Local SEO',
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': LOCAL_BUSINESS_ID,
      name: 'Shelby Web Company',
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: { '@type': 'City', name: opts.areaName },
    url: opts.url,
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  authorName?: string;
  authorUrl?: string;
}) {
  const authorName = opts.authorName ?? 'Dave Richardson';
  const authorUrl = opts.authorUrl ?? absoluteUrl('/about/');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: opts.image ?? `${SITE_URL}og-image.jpg`,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Shelby Web Company',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}og-image.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url,
    },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('/about/#dave-richardson'),
    name: 'Dave Richardson',
    jobTitle: 'Founder & Lead Developer',
    url: absoluteUrl('/about/'),
    worksFor: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Shelby Web Company',
    },
  };
}
