import type { Product } from '@/data/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded-2xl object-cover"
        loading="lazy"
      />
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <span className="text-sm font-medium text-emerald-600">{product.price}</span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{product.brand}</p>
      <button className="mt-4 w-full rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
        Add to Cart
      </button>
    </article>
  );
};

export default ProductCard;
