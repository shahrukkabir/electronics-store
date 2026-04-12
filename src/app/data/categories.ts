export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Kitchen Appliances',
    slug: 'kitchen-appliances',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    icon: '🍳',
  },
  {
    id: 2,
    name: 'Grooming',
    slug: 'grooming',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    icon: '💈',
  },
  {
    id: 3,
    name: 'Electronics Gadgets',
    slug: 'electronics-gadgets',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    icon: '📱',
  },
  {
    id: 4,
    name: 'Networking',
    slug: 'networking',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    icon: '🌐',
  },
];
