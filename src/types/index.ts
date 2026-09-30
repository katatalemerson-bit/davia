export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  installments: string;
  image: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  description?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount?: string;
}

export interface NavigationSubItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  highlight?: boolean;
  badge?: string;
  subcategories?: NavigationSubItem[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'truck' | 'credit-card' | 'sparkles' | 'heart';
}
