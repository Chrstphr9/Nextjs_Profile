import { Contact } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";




const header = async ({ userInfo }: { userInfo: Contact }) => {

    return (
        <div>
           <div className="relative w-full max-w-md mx-auto bg-white overflow-hidden">
  <img
    src={userInfo.cardDesignType.backgroundUrlHorizontal}
    alt="bg image"
    className="absolute top-0 left-0 w-full h-48 object-cover"
  />
                <div className="relative h-48  px-6 pt-[20px]">

                    <div className="text-center mb-[20px]">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <h1 className="text-white text-2xl font-semibold">{userInfo.firstName} {userInfo.lastName}</h1>
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium">Pro</span>
                        </div>
                        <p className="text-gray-200 text-sm">{userInfo.title} @ {userInfo.company}</p>
                    </div>

                    <div className="flex bg-white/20 rounded-xl w-fit mx-auto overflow-hidden backdrop-blur-sm">
                        {/* Call Me Button */}
                        {userInfo?.workPhone && (
                            <Link
                                href={`tel:${userInfo.workPhone.replace(/[^\d+]/g, '')}`}
                                className="relative text-white text-sm px-4 py-2 cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <span className="absolute top-1 bottom-1 right-0 w-px bg-white/30"></span>
                                Call Me
                            </Link>
                        )}

                        {/* Send Email Button - Fixed */}
                        {userInfo?.email ? (
                            <Link
                                target="_blank"
                                href={encodeURI(`mailto:${userInfo.email}?subject=Contacting ${userInfo.firstName || ''}`)}
                                className="relative text-white text-sm px-4 py-2 cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"

                            >
                                <span className="absolute top-1 bottom-1 right-0 w-px bg-white/30"></span>
                                Send Email
                            </Link>
                        ) : null}

                        {/* Save Contact Button */}
                        <Link
                            download
                            href={`https://figocard.com/api/v1/qr/generate/contact/vcf?uniquecode=${userInfo.uniqueCode}`}
                            className="text-white text-sm px-4 py-2 cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            Save Contact
                        </Link>
                    </div>


                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 rounded-full border-4 border-purple overflow-hidden bg-gradient-to-br from-blue-200 to-blue-300">
                            <img src={userInfo.photoUrl} alt="Profile Picture" width={100} height={100} />
                        </div>
                    </div>
                </div>

                <div className="pt-16 px-6 pb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">About Me</h2>
                    <p className="text-gray-700 text-md font-medium mb-6 leading-relaxed">
                        {userInfo.bio}
                    </p>

                    {/* Bottom action buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-medium transition-colors">
                            Connect Back
                        </button>
                        <button className="flex-1 bg-green-200 text-green-500 py-3 px-6 rounded-full text-lg font-medium transition-colors">
                            Pay Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default header;