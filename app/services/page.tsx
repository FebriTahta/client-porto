import React from 'react'  
import Services from '@/components/Services';

const Page = () => {
  return (
    <section className="flex py-12 xl:py-24 xl:h-[95vh] xl:pt-[150px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-mono)]">
      <div className="container mx-auto flex flex-col">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold uppercase mb-4">MY SERVICES</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          some of the services that I offer
          </p>
        </div>
        <Services />
      </div>
    </section>
  )
}

export default Page;
