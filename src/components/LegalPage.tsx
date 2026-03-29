export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="bg-[var(--apothecary-black)] py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-[var(--parchment)] text-fluid-section font-semibold mb-3">
            {title}
          </h1>
          <p className="font-body text-[var(--warm-stone)] text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-[var(--parchment)] py-16 sm:py-20 px-5">
        <div className="max-w-3xl mx-auto prose-legal font-body">
          {children}
        </div>
      </section>
    </div>
  );
}
