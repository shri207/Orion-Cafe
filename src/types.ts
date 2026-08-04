export type CategoryId = 
  | 'all'
  | 'breakfast'
  | 'small-plates'
  | 'coffee'
  | 'tea'
  | 'mocktails'
  | 'pastas'
  | 'pizza'
  | 'burgers'
  | 'desserts'
  | 'chef-specials';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  price: number; // In INR ₹
  description: string;
  shortStory?: string;
  ingredients: string[];
  image: string;
  tags?: ('Chef Signature' | 'Single Origin' | 'Artisanal' | 'Gourmet Vegan' | 'Gluten Free' | 'Banjara Special')[];
  pairingRecommendation?: string;
  isFeatured?: boolean;
}

export interface ReservationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Constellation Courtyard' | 'Velvet Lounge' | 'Main Dining Room' | 'Espresso Bar Barista Seats';
  occasion?: string;
  specialRequests?: string;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  temperature?: 'Hot' | 'Iced';
  milkOption?: 'Whole Milk' | 'Oat Milk' | 'Almond Milk' | 'None';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interior' | 'Culinary' | 'Coffee' | 'Atmosphere';
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  date: string;
}

export interface ExperiencePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlightText: string;
}
