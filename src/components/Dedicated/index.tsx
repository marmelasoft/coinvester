import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Dedicated to share whealth amoungst everyone</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">We believe that real estate growth should serve the needs of the entire population. That's why we're committed to ensuring that everyone has a voice in the process. No one should be left out when it comes to shaping the communities where we live, work, and play. Join us in creating a more inclusive and equitable future for all.</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 text-center lg:text-start"> Nelson Estevão, CEO</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
