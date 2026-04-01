import { NavItem, Service, Destination, Testimonial, WhyChooseUsItem } from "./types";

export const LEFT_NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
];

export const RIGHT_NAV_ITEMS: NavItem[] = [
  { label: 'Countries', path: '/countries' },
  { label: 'Team', path: '/team' },
  // { label: 'Stories', path: '/stories' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Appeals, Refusals & Legal Matters',
    points: [
      'Tribunal and Court matters',
      'Visa Refusals and Cancellations',
      'Bridging Visas',
    ],
    description: 'Bespoke migration solutions for C-suite professionals and their families.',
    image: '/AppealsLegalMatters.jpg',
    metadata: { processTime: '3-6 Months', successRate: '99%' }
  },
  {
    id: '2',
    title: 'Protection & Humanitarian Visas',
        points: [
      'Refugee, Humanitarian and Protection visas'
    ],
    description: 'Strategic planning for Golden Visas and citizenship through investment.',
    image: '/ProtectionHumanitarianVisas.jpg',
    metadata: { processTime: '6-12 Months', successRate: '98%' }
  },
  {
    id: '3',
    title: 'Family & Relationship Visas',
    points: [
      'Partner visa',
      'Prospective Marriage visa',
      'Child visa',
      'Parent Visa',
      'Career Visa'
    ],    
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: '/FamilyRelationshipVisas.jpeg',
    metadata: { processTime: '9-18 Months', successRate: '95%' }
  },
    {
    id: '4',
    title: 'Visitor & Temporary Entry Visas',
    points: [
      'Visitor visa',
      'Working Holiday / Work and Holiday visa',
      'Employer Sponsored and Temporary Work visas',
      'Training visa',
      'Graduate visa'
    ],    
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: '/VisitorTemporaryEntryVisas.jpeg',
    metadata: { processTime: '9-18 Months', successRate: '95%' }
  },
   {
    id: '5',
    title: 'Skilled Migration Services',
    points: [
      'Skills Assessments',
      'Skilled Independent visa',
      'Skilled Employer Sponsored visa',
      'Skilled Regional visa',
      'Global Talent visa'
    ],    
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: '/SkilledMigrationServices.jpeg',
    metadata: { processTime: '9-18 Months', successRate: '95%' }
  },
  {
    id: '6',
    title: 'Residency & Citizenship',
    points: [
      'Resident Return visa',
      'Australian Citizenship',
    ],    
    description: 'Pathways to permanent residency in the world\'s most desirable locations.',
    image: '/ResidencyCitizenshipService.jpeg',
    metadata: { processTime: '9-18 Months', successRate: '95%' }
  }    
];

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Australia',
    image: '/Australia.jpg',
    priceRange: '€500k+',
    visaType: 'Golden Visa',
    span: 'md:col-span-1'
  },
  {
    id: '2',
    name: 'New Zealand',
    image: '/NewZealand.jpg',
    priceRange: '$20k+',
    visaType: 'Subclass 189',
    span: 'md:col-span-1'
  },

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