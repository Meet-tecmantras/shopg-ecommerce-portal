import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import SectionHeader from '@/components/SectionHeader';
import collectionMock from '@/data/collectionMock';
import homeMock from '@/data/homeMock';

const HomePage = () => {
  const homeData = homeMock;
  const featuredCollections = collectionMock;

  return (
    <div className="space-y-12">
      <HeroSection />
      <SectionHeader title="Top Selling" description="Products shipping fastest" />
      <ProductGrid title="Top Selling" products={homeData.topSelling} />
      <SectionHeader title="Top Save Today" description="Latest arrivals just added" />
      <ProductGrid title="Top Save Today" products={homeData.topSaveToday} />
      <SectionHeader title="Browse by Category" description="Curated for you" />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredCollections.categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="text-lg font-semibold text-slate-900">{category.name}</h4>
            <p className="mt-1 text-sm text-slate-500">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
