import About from "@/components/About";

export default function Home() {
  return (
    <section className="py-12 xl:py-24 xl:h-[95vh] xl:pt-[240px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto">
            <About />
        </div>
    </section>
  );
}
