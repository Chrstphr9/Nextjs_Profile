import Image from 'next/image';
import DP from '../../public/DP.jpg';
import React from 'react';

const ProfileCard = () => {
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-r from-purple-600 via-purple-500 to-gray-700 px-6 pt-[20px]">
                <div className="text-center mb-[20px]">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <h1 className="text-white text-2xl font-semibold">Sam Emmanuel</h1>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium">Pro</span>
                    </div>
                    <p className="text-gray-200 text-sm">Snr. Engineer @ Apple</p>
                </div>

                <div className="flex gap-x-2 items-center justify-center  bg-white/20 rounded-2xl ">
                    <button className="backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl font-medium cursor-pointer">
                        Call Sam
                    </button>
                    <button className="backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl font-medium cursor-pointer">
                        Send Email
                    </button>
                    <button className="backdrop-blur-sm text-white text-sm px-4 py-2 rounded-xl font-medium cursor-pointer">
                        Save Contact
                    </button>
                </div>

                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300">
                        <Image src={DP} alt="Profile Picture" width={100} height={100} />
                    </div>
                </div>
            </div>

            <div className="pt-16 px-6 pb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About Me</h2>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    I Love everything Tech and I love eating parfait ö the beach.
                </p>

                {/* Bottom action buttons */}
                <div className="flex gap-3">
                    <button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full text-sm font-medium transition-colors">
                        Connect Back
                    </button>
                    <button className="flex-1 bg-green-300 hover:bg-green-500 text-black py-3 px-6 rounded-full text-sm font-medium transition-colors">
                        Pay Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;