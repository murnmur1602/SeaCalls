export interface Trip {
  id: number;
  slug: string;
  image: string;
  country: string;
  region: string;
  dates: string;
  price: string;
  format: string;
  description: string;
  customButton?: string;
  // Детальная информация для страницы путешествия
  duration?: string;
  spotsLeft?: number;
  totalSpots?: string;
  distance?: string;
  route?: string;
  fullDescription?: string[];
}
