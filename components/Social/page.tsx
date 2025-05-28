'use client'
import React from 'react';
import Instagram from '../../public/instagram.png'
import Linkedin from '../../public/linkedin.png'
import Youtube from '../../public/youtube.png'
import Tiktok from '../../public/tiktok.png'
import Whatsapp from '../../public/whatsapp.png'
import Image from 'next/image';
import Snapchat from '../../public/snapchat.png'
import Facebook from '../../public/facebook.png'

const MySocials = () => {
    
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">My Socials</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
  {/* Row 1 */}
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2 cursor-pointer">
      <Image src={Tiktok} alt='Linkedin' width={50} height={50} className='rounded-4xl'/>
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">Tiktok</span>
  </div>

  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2 cursor-pointer">
      <Image src={Linkedin} alt='Linkedin' width={50} height={50} />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">LinkedIn</span>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2 cursor-pointer">
      <Image src={Youtube} alt='Youtube' width={50} height={50} />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">YouTube</span>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-2 cursor-pointer">
      <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">X</span>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2 cursor-pointer">
      <Image src={Instagram} alt='Instagram' width={50} height={50} className='rounded-full' />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">Instagram</span>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2 cursor-pointer ">
      <Image src={Snapchat} alt='Snapchat' width={50} height={50} className='rounded-full' />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">Snapchat</span>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2 cursor-pointer">
       <Image src={Whatsapp} alt='Facebook' width={50} height={50} />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">WhatsApp</span>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2 cursor-pointer">
      <Image src={Facebook} alt='Facebook' width={50} height={50} />
    </div>
    <span className="text-xs font-medium text-gray-700 text-center">Facebook</span>
  </div>
</div>
    </div>
  );
};

export default MySocials;