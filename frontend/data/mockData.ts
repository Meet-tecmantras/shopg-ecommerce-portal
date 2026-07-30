const mockCategories = [
  {
    id: 'cat-01',
    name: 'Apparel',
    description: 'Everything you need to look sharp and feel comfortable.'
  },
  {
    id: 'cat-02',
    name: 'Electronics',
    description: 'Cutting-edge devices for work and play.'
  }
];

const mockProducts = [
  {
    id: 'prod-100',
    name: 'Eco Sipper Bottle',
    brand: 'PlanetCare',
    price: '$35',
    rating: 4.8,
    reviewCount: 480,
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prod-101',
    name: 'Commuter Backpack',
    brand: 'Transit',
    price: '$120',
    rating: 4.6,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'
  }
];

export const mockData = {
  categories: mockCategories,
  products: mockProducts
};
