
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  metadata: {
    processTime: string;
    successRate: string;
  };
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  priceRange: string;
  visaType: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}
export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  metric: string;
}