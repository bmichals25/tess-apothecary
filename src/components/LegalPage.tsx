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
      <section className="bg-[#1A1A1A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-[#F5F0E8] text-3xl sm:text-4xl mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            {title}
          </h1>
          <p
            className="text-[#A89F91] text-sm"
            style={{ fontFamily: "'Karla', sans-serif" }}
          >
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-16 px-4">
        <div
          className="max-w-3xl mx-auto prose-legal"
          style={{ fontFamily: "'Karla', sans-serif" }}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
