'use client'
import { getUsers, User } from './api/getUsers';
import { useState, useEffect } from 'react';

// array dummy data
const SkillData = [
    {
        id: '1',
        skill_name: 'React',
        icon: 'iconReact'
    },
    {
        id: '2',
        skill_name: 'Typescrypt',
        icon: 'iconTypescrypt'
    },
    {
        id: '3',
        skill_name: 'Laravel',
        icon: 'iconLaravel'
    },
    {
        id: '4',
        skill_name: 'Codeigniter',
        icon: 'iconCodeigniter'
    },
    {
        id: '5',
        skill_name: 'Python',
        icon: 'iconPython'
    },
    {
        id: '6',
        skill_name: 'Design',
        icon: 'iconDesign'
    }
];

// object dummy data
const NamaOrang = {
    nama:'jaka',
    usia:'23 tahun'
};

const Page = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUsers();
                setUsers(userData);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="py-12 xl:py-24 xl:h-[95vh] xl:pt-[220px] pt-[120px] bg-white dark:bg-transparent font-[family-name:var(--font-geist-sans)]">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold uppercase mb-4">Playground</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Playing with dummy data, mapping and displaying data
                    </p>
                </div>
                
                <span  className="ml-[10px] inline-flex items-center px-3 py-[1px] text-sm dark:bg-primary bg-slate-400 text-white">
                {NamaOrang.nama}
                <hr />
                {NamaOrang.usia}
                </span>

                <hr className='mt-10 mb-10'/>
            
                {SkillData.map((item) => {
                        return  (
                        <div key={item.id} className="ml-[10px] inline-flex items-center px-3 py-[1px] rounded-full text-sm dark:bg-primary bg-slate-400 text-white">
                                            
                            {item.skill_name}
                        
                        </div>
                        )
                })}

                <hr className='mt-10 mb-10'/>

                {SkillData.map((item) => {
                    return  (
                    <div key={item.id} className="ml-[10px] inline-flex items-center px-3 py-[1px] rounded-full text-sm dark:bg-primary bg-slate-400 text-white">
                        {item.icon}
                    </div>
                    )
                })}

                <hr className='mt-10 mb-10'/>

                {users.map((user, index) => (
                    // komponen
                    <div key={index} className="ml-[10px] inline-flex items-center px-3 py-[1px] rounded-full text-sm dark:bg-primary bg-slate-400 text-white">
                        {user.name}
                    </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Page