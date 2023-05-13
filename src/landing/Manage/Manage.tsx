import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const data = [
    {
        heading: "Co-Invest",
        price: 50,
        user: 'start with only',
        button: "Choose a property",
        profiles: '1 Property',
        posts: '1 source of revenue',
        category: 'monthly'
    },{
        heading: "Co-Fund",
        price: 250,
        user: 'start with only',
        button: "Choose a ",
        profiles: 'Help choose what to build next',
        posts: 'A common pool of revenue',

        category: 'monthly'
    }
]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>Investment made easy</h3>


                    {/*
                <div className='md:flex md:justify-around mt-20'>

                        <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Free 15-day trial</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Unlimited Team Members</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Cancel Anytime</h4>
                    </div>
                </div>
    */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-16 mx-5 gap-14'>
                    {data.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
                            <p className='text-sm font-medium text-bggrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "60%", margin: "auto" }} />
                            <h3 className='text-sm font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-sm font-medium text-darkgrey mb-3'>{items.posts}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;
