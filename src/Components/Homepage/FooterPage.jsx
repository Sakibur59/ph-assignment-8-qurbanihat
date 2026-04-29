import React from 'react';
import instaImage from '../../assets/instagram.png'
import fbImage from '../../assets/facebook.png'
import TwitterImage from '../../assets/twitter.png'
import Image from 'next/image';
const FooterPage = () => {
    return (
        <div className='bg-[#244D3F] mt-10 pt-10'>
            <div className='text-center space-y-4 max-w-290 mx-auto'>
                <h1 className='text-white font-bold text-5xl'>QurbaniHat – Livestock Booking Platform</h1>
                <p className='text-white'>QurbaniHat is a streamlined digital marketplace that connects buyers with trusted farmers for seamless livestock booking. It offers a transparent, stress-free way to browse, compare, and secure sacrificial animals for Qurbani with real-time availability and secure payments.</p>
                <h2 className='text-white'>Social Links</h2>
                <div className='flex justify-center items-center gap-2 border-b border-[#1A8862] pb-6'>
                    <Image src={fbImage} alt='Facebook' width={30} height={30}></Image>
                    <Image src={instaImage} alt='Facebook' width={30} height={30}></Image>
                    <Image src={TwitterImage} alt='Facebook' width={30} height={30}></Image>
                </div>
            </div>
                <div className='max-w-290 mx-auto pt-3 text-[#FAFAFA]'>
                    <div className='flex justify-between'>
                        <p>© 2026 QurbaniHat. All rights reserved.</p>
                    <div className='lg:flex justify-end gap-6 flex-row'>
                        
                        <div>

                        <p>Privacy Policy</p>
                        </div>
                         <div>

                        <p> Terms of Service</p>
                        </div>
                        <div>

                        <p>Cookies</p>
                        </div>

                        
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default FooterPage;