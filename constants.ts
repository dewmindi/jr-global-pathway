import { NavItem, Service, Destination, Testimonial } from "./types";



export const LEFT_NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/' },
  { label: 'Services', path: '/services' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
  { label: 'Countries', path: '/countries' },
  { label: 'Stories', path: '/stories' },
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
