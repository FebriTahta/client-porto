import React from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/Badge';
import { Socials } from '@/components/Socials';

const TechSkill = [
  {
    tech_field: 'Modern Web Development',
    tech_list: [
      {
        icon:  
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
        ,
        text: 'Next.js',
        style: 'bg-black text-white'
      },
      {
        icon: 'faReact',
        text: 'React.js',
        style: 'bg-blue-500 text-white'
      },
      {
        icon: 'faJs',
        text: 'JavaScript',
        style: 'bg-yellow-500 text-white'
      }
    ]
  },
  {
    tech_field: 'UI Framework',
    tech_list: [
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>,
        text: 'Tailwind CSS',
        style: 'bg-cyan-100 text-cyan-800'
      },
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>,
        text: 'Material UIl',
        style: 'bg-blue-500 text-white'
      },
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>,
        text: 'Shadcn UI',
        style: 'bg-white text-black'
      }
    ]
  },
  {
    tech_field: 'Backend Framework',
    tech_list: [
      {
        icon: 'faLaravel',
        text: 'Laravel',
        style: 'bg-red-500 text-white'
      },
      {
        icon: 'faPhp',
        text: 'Codeigniter',
        style: 'bg-red-600 text-white'
      },
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
          <path d="M20.344 0C17.053 0 12 2.588 12 7.457c0 4.687 4.303 5.342 4.303 8.586 0 3.044-3.21 3.21-3.21 3.21H8.382c-1.694 0-2.415-1.055-2.415-2.109v-3.916h-1.98v3.916c0 1.79 1.63 4.15 4.395 4.15h4.417c1.517 0 6.697-1.21 6.697-6.918C20.495 9.633 16 8.322 16 6.304 16 4.2 18.55 3.7 20.283 3.7c1.184 0 2.052.788 2.052 2.03V9.55h1.98V5.74C24 2.74 22.137 0 20.344 0z"/>
        </svg>,
        text: 'Yii2',
        style: 'bg-blue-400 text-white'
      },
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current">
          <path d="M12.186 0c2.234 0 4.256.491 6.068 1.472 1.812.982 3.236 2.344 4.272 4.086 1.037 1.742 1.555 3.677 1.555 5.804 0 2.126-.518 4.06-1.555 5.803-1.036 1.742-2.46 3.104-4.272 4.086-1.812.981-3.834 1.472-6.068 1.472-2.235 0-4.257-.49-6.069-1.472-1.812-.982-3.236-2.344-4.272-4.086C.808 15.423.29 13.488.29 11.362c0-2.127.518-4.062 1.555-5.804C2.88 3.816 4.304 2.454 6.117 1.472 7.929.491 9.95 0 12.186 0z"/>
        </svg>,
        text: 'Express.js',
        style: 'bg-gray-700 text-white'
      }
    ]
  },
  {
    tech_field: 'Development Tools',
    tech_list: [
      {
        icon: 'faGit',
        text: 'Git',
        style: 'bg-red-500 text-white'
      },
      {
        icon: 
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1 fill-current"> 
          <path d="M12 .297c-6.63 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
        </svg>,
        text: 'Visual Studio Code',
        style: 'bg-blue-500 text-white'
      }
    ]
  }
];


const Services = [
  {
    icon: 'faInstagram',
    url: 'https://www.instagram.com/febri_tahta/'
  },
  {
    icon: 'faLinkedin',
    url: 'https://www.linkedin.com/in/febri-tahta-nugraha/'
  },
  {
    icon: 'faThreads',
    url: 'https://www.threads.net/@febri_tahta'
  }
];


const About = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-24">
      {/* Image dan Sosmed */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-[300px] h-[300px] mx-auto text-center">
          <div className="hidden dark:block">
            <Image 
              src="/me.jpeg"
              alt="Profile Dark"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>
          <div className="block dark:hidden">
            <Image 
              src="/t-logo.png" 
              alt="Profile Light"
              fill
              priority
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <div className='font-[family-name:var(--font-geist-mono)] text-center mt-10'>
          <h2 className='text-lg'>Febri Rizqi Tahta Nugraha</h2>
          <div className='text-muted-foreground'>
            <h5 className='text-sm'>You can call me Tahta</h5>
            <span className='text-sm'>Find me on these social media</span>
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
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground mb-6">
        An IT activist who dedicates his knowledge to technological developments. Likes learning and establishing mutually beneficial relationships. I am open to working together, listening to your IT needs and providing solutions
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
                          <Badge key={techIndex} icon={tech.icon} text={tech.text} className={tech.style} />
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

export default About;