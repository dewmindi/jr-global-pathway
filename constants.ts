import { NavItem, Service, Destination, Testimonial, WhyChooseUsItem } from "./types";



export const LEFT_NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
  { label: 'Countries', path: '/countries' },
  // { label: 'Stories', path: '/stories' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Executive Relocation',
    description: 'Bespoke migration solutions for C-suite professionals and their families.',
    image: 'https://picsum.photos/800/1000?random=11',
    metadata: { processTime: '3-6 Months', successRate: '99%' }
  },
  {
    id: '2',
    title: 'Investor Visas',
    description: 'Strategic planning for Golden Visas and citizenship through investment.',
    image: 'https://picsum.photos/1200/800?random=12',
    metadata: { processTime: '6-12 Months', successRate: '98%' }
  },
  {
    id: '3',
    title: 'Residency Programs',
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: 'https://picsum.photos/800/1200?random=13',
    metadata: { processTime: '9-18 Months', successRate: '95%' }
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Switzerland',
    image: 'https://picsum.photos/800/800?random=21',
    priceRange: 'CHF 20k+',
    visaType: 'D-Visa',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: '2',
    name: 'Portugal',
    image: 'https://picsum.photos/800/600?random=22',
    priceRange: '€500k+',
    visaType: 'Golden Visa',
    span: 'md:col-span-1'
  },
  {
    id: '3',
    name: 'Canada',
    image: 'https://picsum.photos/600/800?random=23',
    priceRange: '$15k+',
    visaType: 'Express Entry',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    id: '4',
    name: 'Singapore',
    image: 'https://picsum.photos/800/800?random=24',
    priceRange: '$50k+',
    visaType: 'Employment Pass',
    span: 'md:col-span-1'
  },
  {
    id: '5',
    name: 'Australia',
    image: 'https://picsum.photos/800/600?random=25',
    priceRange: '$20k+',
    visaType: 'Subclass 189',
    span: 'md:col-span-2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alistair Sterling',
    role: 'Tech Founder',
    text: 'The transition to Lisbon was seamless. Elysian handled every intricate detail with the grace and precision I expect from a luxury service.'
  },
  {
    id: '2',
    name: 'Elena Vance',
    role: 'Art Consultant',
    text: 'Moving to Switzerland was a dream, but the paperwork was a nightmare. Elysian turned that nightmare into a beautiful, guided journey.'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Investor',
    text: 'Discretion and speed were my primary concerns. The team delivered on both fronts, securing our residency months ahead of schedule.'
  }
];
export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: '1',
    title: 'Expert Consultants',
    description: 'Our team comprises immigration lawyers, financial advisors, and relocation specialists with decades of combined experience navigating global migration pathways.',
    image: 'https://picsum.photos/800/600?random=31',
    metric: '50+ Countries'
  },
  {
    id: '2',
    title: 'Discretion Guaranteed',
    description: 'We understand that privacy is paramount for high-net-worth individuals. All client information is protected under the strictest confidentiality agreements.',
    image: 'https://picsum.photos/800/600?random=32',
    metric: '99% Confidentiality'
  },
  {
    id: '3',
    title: 'Bespoke Solutions',
    description: 'No two relocations are identical. We craft personalized strategies tailored to your unique financial, legal, and lifestyle requirements.',
    image: 'https://picsum.photos/800/600?random=33',
    metric: '100% Custom'
  },
  {
    id: '4',
    title: 'Fast-Track Processing',
    description: 'Our established relationships with government agencies and immigration departments accelerate approval timelines without compromising compliance.',
    image: 'https://picsum.photos/800/600?random=34',
    metric: '3-6 Months Avg'
  },
  {
    id: '5',
    title: 'Lifetime Support',
    description: 'Your partnership with us extends beyond approval. We provide ongoing immigration compliance, citizenship guidance, and renewal management.',
    image: 'https://picsum.photos/800/600?random=35',
    metric: 'Lifetime Access'
  }
];