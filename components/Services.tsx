import Mycard from './custom/Card';
import MyButton from './custom/Button';

const DataServices = [
    {
        title: 'Konsultan IT',
        description: 'Providing IT solutions and advice for your business needs',
        icon: 
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>,
        services_list: [
            {
                list_name: 'System Requirements Analysis',
            },
            {
                list_name: 'Architectural Planning',
            },
            {
                list_name: 'System Optimization',
            }
        ]
    },
    {
        title: 'Programmer',
        description: 'Build applications according to your business needs',
        icon: 
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>,
        services_list: [
            {
                list_name: 'Web Development',
            },
            {
                list_name: 'Mobile Development',
            },
            {
                list_name: 'System Integration',
            }
        ]
    },
    {
        title: 'Tutor',
        description: 'Share knowledge and experience in the field of programming',
        icon: 
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
        </svg>,
        services_list: [
            {
                list_name: 'Private Mentoring',
            },
            {
                list_name: 'Workshop',
            },
            {
                list_name: 'Online Course',
            }
        ]
    }
];

const Services = () => {
  return (
    <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span>Home</span>
          <span>|</span>
          <span>Services</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {DataServices.map((item, index) => (
                <Mycard 
                    title={item.title} 
                    description={item.description} 
                    icon={item.icon} 
                    services_list={item.services_list}  
                    key={index}
                    button={<MyButton className="w-full" href="#" text="Contact Me" />}
                />
            ))}
        </div>
    </div>
  )
}

export default Services