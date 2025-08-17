import { IconRefresh } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='pl-[20vw] pr-[3vw] h-[100vh] w-[100vw] scrollbar-hide overflow-y-scroll bg-[#EDEDED] dark:bg-[#121212] py-[10px] text-black'>
            <div className=" w-full h-[35px] flex items-center justify-between mb-[20px]">
                <div className=" bg-white dark:bg-[#000000] dark:text-white rounded-xl text-sm font-semibold max-h-[35px] p-2">
                    23/06/2023 - 12:23 AM
                </div>

                <div className=" bg-white dark:bg-[#000000] rounded-xl text-sm font-semibold max-h-[35px] p-2 text-green-500 flex items-center justify-center">
                    <IconRefresh size={14} className=" mr-2" stroke={3} />
                    Refresh
                </div>
            </div>

            <div className=' w-full py-[15px] px-[10px] text-[#00000080] dark:text-[#FFFFFF80] flex items-center justify-start bg-white dark:bg-black rounded-xl mb-[20px]'>
                <Link
                    href={"/masterControl"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Privacy Policy
                </Link>

                <Link
                    href={"/masterControl/termsAndConditions"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Terms & Conditions
                </Link>

                <Link
                    href={"/masterControl/aboutUs"}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    About Us
                </Link>

                <Link
                    href={"/masterControl/predictionManagement"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Prediction Management
                </Link>

                <Link
                    href={"/masterControl/otpControl"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    OTP Control
                </Link>
            </div>

            <div className=' w-full py-[15px] px-[10px] text-[#00000080] dark:text-[#FFFFFF80] flex items-center justify-start bg-white dark:bg-black rounded-xl mb-[20px]'>
                <Link
                    href={""}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    English
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    العربية
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    普通话
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    हिंदी
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    اردو
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    français
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    português
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    español
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Deutsch
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    русский
                </Link>
            </div>

            <div className=' w-full h-[700px] bg-white dark:bg-black rounded-xl overflow-y-scroll pb-[20px] pt-[20px] scrollbar-hide'>
                <h1 className=' text-black dark:text-white font-extrabold text-[18px] mb-2 px-[20px]'>About Us</h1>
                <p className=' text-[#00000080] dark:text-[#FFFFFF80] mb-6 px-[20px]'>Update About Us</p>

                <form
                    action=""
                    className=' w-full bg-transparent text-[#0000008C] dark:text-[#FFFFFF8C]'
                >
                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Main Header
                        </label>
                        <input
                            type="text"
                            placeholder='Main Header'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Main Header Description
                        </label>
                        <input
                            type="text"
                            placeholder='Main Header Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Header Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Second Header
                        </label>
                        <input
                            type="text"
                            placeholder='Second Header'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Second Header Description
                        </label>
                        <input
                            type="text"
                            placeholder='Second Header Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Second Header Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Third Header
                        </label>
                        <input
                            type="text"
                            placeholder='Third Header'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Third Header Description
                        </label>
                        <input
                            type="text"
                            placeholder='Third Header Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 1 Title
                        </label>
                        <input
                            type="text"
                            placeholder='Title'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 1 Description
                        </label>
                        <input
                            type="text"
                            placeholder='Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 1 Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 2 Title
                        </label>
                        <input
                            type="text"
                            placeholder='Title'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 2 Description
                        </label>
                        <input
                            type="text"
                            placeholder='Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 2 Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 3 Title
                        </label>
                        <input
                            type="text"
                            placeholder='Title'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 3 Description
                        </label>
                        <input
                            type="text"
                            placeholder='Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Service 3 Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Support Title
                        </label>
                        <input
                            type="text"
                            placeholder='Title'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Support Description
                        </label>
                        <input
                            type="text"
                            placeholder='Description'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Middle Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Instagram Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            X Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Tiktok Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Facebook Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Threads Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            WeChat Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Telegram Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Google PlayStore Account Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Apple Store Link
                        </label>
                        <input
                            type="text"
                            placeholder='Link'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Apple Store Button Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full border-b dark:border-b-[#FFFFFF33] p-[20px]'>
                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Email Support
                        </label>
                        <input
                            type="email"
                            placeholder='Email'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Contact Us
                        </label>
                        <input
                            type="text"
                            placeholder='Contact'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Header Logo
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Button Logo
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Buttom Strip Line Image
                        </label>
                        <input
                            type="text"
                            placeholder='Lockersman.png'
                            className=' mb-4 bg-transparent placeholder:font-semibold dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />


                        <label
                            htmlFor=""
                            className=' text-[13px] block mb-2'
                        >
                            Copyright Message
                        </label>
                        <input
                            type="text"
                            placeholder='Message'
                            className=' mb-4 bg-transparent dark:text-white text-black placeholder:text-black dark:placeholder:text-white focus:outline-none p-2 border dark:border-[#FFFFFF1A] border-[#0000001A] rounded-xl w-full'
                        />
                    </div>

                    <div className=' w-full flex items-center justify-center mt-[10px]'>
                        <Link
                            href={"/masterControl/aboutUs/otp"}
                            className=' h-[48px] px-[10px] w-[330px] flex items-center justify-center bg-black text-white dark:bg-[#AB4FA8] rounded-2xl'
                        >
                            Publish
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page