import ProductCard from './ProductCard';
import type { Product } from '@/data/types';

const ProductGrid = ({ title, products }: { title: string; products: Product[] }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <span className="text-sm text-slate-500">View all</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
