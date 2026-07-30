export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
}

export interface HomeData {
  topSelling: Product[];
  topSaveToday: Product[];
}

export interface CollectionData {
  categories: Array<{ id: string; name: string; description: string }>;
}
