import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/Badge';
import { Socials } from '@/components/Socials';
// import DevImage from '../DevImage';
import {TechSkill , Services} from "@/api/tech";
// import {ProfileInterface} from "@/interface/profile";
// import { Metadata } from "next";


// export async function generateMetadata({props}:{props: ProfileInterface}): Promise<Metadata> {
//   const { name, desc, photo } = props;
//   console.log(photo);
//   return {
//     title: `${name}`,
//     description: `${desc}`,
//   };
// }

const Home = () => {

  // const processedPhoto = props.photo instanceof File ? URL.createObjectURL(props.photo) : props.photo;

  return (
    <div className="flex flex-col xl:flex-row gap-24">
      {/* Image dan Sosmed */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[300px] h-[300px] mx-auto text-center">
          <div className="hidden dark:block">
            {/* <DevImage src={processedPhoto} /> */}
          </div>
          <div className="block dark:hidden">
            {/* <DevImage src={processedPhoto}/> */}
          </div>
        </div>

        <div className='font-[family-name:var(--font-geist-mono)] text-center mt-10'>
          <h2 className='text-lg'>a</h2>
          <div className='text-muted-foreground'>
            <p className='text-sm'>You can call me a</p>
            <p className='text-sm'>Find me on these social media</p>
          </div> 
        </div>

        {/* Sosmed */}
        <div className="flex gap-x-6 mx-auto mt-8">
          {Services.map ((item, index) => (
            <Socials key={index} icon={item.icon} url={item.url} />
          ))}
        </div>
      </div>

      <hr className='mt-[-70px] border-t-2 border-border'/>
      {/* Info */}
      <div className="flex-1 flex flex-col items-start font-[family-name:var(--font-geist-mono)] mt-[-70px]">
        <p className="text-3xl font-bold mb-4">About Me</p>
        <p className="text-muted-foreground mb-6">
          a
        </p>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="w-full grid grid-cols-3 h-[48px] mb-12">
            <TabsTrigger value="skills">Skill Set</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" >
            <div className=" xl:text-left">
              <h3 className="h3 mb-8">Tech Skill</h3>
              <div className="mb-16">
                
                {TechSkill.map((item, index) => (
 
                  <div key={index} className="border-b border-border mb-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      
                      {/* perwakilan item yang akan ditata dari array tech_list, perwakilan tech diurutkan berdasarkan techIndex */}
                      {
                        item.tech_list.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            icon={tech.icon} 
                            text={tech.text} 
                            className={`inline-flex items-center px-3 py-[1px] rounded-full text-sm ${tech.style}`} />
                        ))
                      }

                    </div>
                    <div className="text-muted-foreground text-sm">{item.tech_field}</div>
                  </div>

                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="text-center xl:text-left">
              <h3 className="h3 mb-8">Educational Background</h3>
              <div className="mb-16">
                <div className="border-b border-border mb-4">
                  <div>Bachelor of Information Engineering</div>
                  <div className="text-muted-foreground">Institut Teknologi Adhi Tama Surabaya (2015-2020)</div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience">
            <div className="text-center xl:text-left">
              <h3 className="h3 mb-8">Work Experience</h3>
              <div className="mb-16">
                <div className="border-b border-border mb-4">
                  <div>Programmer Experts</div>
                  <div className="text-muted-foreground">Badan Pelayanan Pengadaan Barang/Jasa (2024)</div>
                </div>
                <div className="border-b border-border mb-4">
                  <div>Individual Consultant</div>
                  <div className="text-muted-foreground">Badan Pelayanan Pengadaan Barang/Jasa (2023)</div>
                </div>
                <div className="border-b border-border mb-4">
                  <div>Ophar Shared Services Regional 5 PC Consumer</div>
                  <div className="text-muted-foreground">Finance ISH - TELKOM INDONESIA (2023)</div>
                </div>
                <div className="border-b border-border mb-4">
                  <div>Programmer Laboratorium Digital Forensk Cyber Crime</div>
                  <div className="text-muted-foreground">Polda Metro Jaya (2019)</div>
                </div>
                <div className="border-b border-border mb-4">
                  <div>Programmer</div>
                  <div className="text-muted-foreground">PT Javawebmedia Edukasi Indonesia (2018)</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;