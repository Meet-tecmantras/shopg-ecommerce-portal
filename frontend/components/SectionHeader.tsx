const SectionHeader = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="space-y-1">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{title}</p>
      <h2 className="text-3xl font-semibold text-slate-900">{description}</h2>
    </div>
  );
};

export default SectionHeader;
