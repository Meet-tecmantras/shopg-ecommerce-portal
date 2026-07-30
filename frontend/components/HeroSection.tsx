const HeroSection = () => {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white shadow-lg">
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">Tecmantras Solutions</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight">
        ShopG Commerce
        <span className="block text-xl font-semibold">Secure, fast, and resilient shopping</span>
      </h1>
      <p className="mt-4 text-base text-emerald-100">
        Browse curated products, manage your cart, and complete orders even while the backend is temporarily
        unavailable — the UI gracefully falls back to mock data to keep your sales cycle flowing.
      </p>
    </section>
  );
};

export default HeroSection;
