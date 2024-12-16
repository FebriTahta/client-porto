// "use client"
import HomePage from "@/components/page/Home";
// import { useProfile } from "@/context/ProfileContext";

export default function Home() {
  // const {profile} = useProfile();
  
  return (
    
    <section className="py-12 xl:py-24 xl:h-[95vh] xl:pt-[240px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
        <div className="container mx-auto">
            {/* Menampilkan properti tertentu dari profile */}
            {/* {profile && (
              <HomePage props={profile}/>
            )} */}
            <HomePage/>
        </div>
    </section>
  );
}
