'use client'
import React from 'react';
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

// const from api
interface User {
    id: number;
    name: string;
    email: string;
    // Tambahkan properti lain sesuai dengan respons API
}

const Page = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getUsers');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to load user data');
            } finally {
                setLoading(false);
            }
        };
      
        fetchData();
    }, []);

    if (loading) return <div className="spinner">Loading...</div>;
    if (error) return <p>{error}</p>;

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

                {users.map((user)=>{
                    return (
                    <div key={user.id} className="ml-[10px] inline-flex items-center px-3 py-[1px] rounded-full text-sm dark:bg-primary bg-slate-400 text-white">
                        {user.name}
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Page