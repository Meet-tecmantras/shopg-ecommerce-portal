import fetchWithFallback from '@/lib/fetchWithFallback';
import collectionMock from '@/data/collectionMock';

const CollectionsPage = async () => {
  const data = await fetchWithFallback('/api/collections', collectionMock);

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-900">Collections</h1>
      <p className="text-slate-500">Filter by category, brand, price, rating, or anything that matters to you.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.categories.map((category) => (
          <div key={category.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{category.name}</h2>
            <p className="mt-2 text-sm text-slate-500">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsPage;
