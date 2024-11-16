import React from 'react';
import About from '@/components/About';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
const page = () => {

  return (
    <section className="py-12 xl:py-24 xl:h-[95vh] xl:pt-[220px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto">
            <About />
        </div>
    </section>
  )
}

export default page