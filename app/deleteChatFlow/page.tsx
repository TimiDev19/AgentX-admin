"use client"
import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import Homepage from "@/components/Homepage/Homepage";
import { IconArrowDown, IconArrowUp, IconCalendar, IconGlobe, IconNetwork, IconRefresh } from "@tabler/icons-react";
import { useState } from "react";
import loginLogo from "@/assets/login_logo.png"
import Image from "next/image";
import dummyData from "@/helpers/helpers";
import Link from "next/link";
import ellipse from "@/assets/biggest.png"
import ellipse1 from "@/assets/second-biggest.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import sideImg from '@/assets/sidebar-profile.png'

const page = () => {
    return (
        <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
            {/* <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse1}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
                <Image
                    src={ellipse2}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
                <Image
                    src={ellipse3}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
                <Image
                    src={ellipse4}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
                <Image
                    src={ellipse5}
                    alt=''
                    className=''
                />
            </div> */}
            <div className=" flex items-start justify-center">
                <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-center justify-start">
                    <h1 className=" font-bold text-[20px] mb-[20px] text-center dark:text-white">You Sure You want to delete this chat flow?</h1>

                    <Link
                        href={"/chatBot/chatFlows"}
                        className=" w-full flex items-center justify-center text-white bg-[#EC5C4D] dark:bg-[#EC5C4D] hover:bg-[#EC5C4D]/60 duration-500 h-[48px] rounded-2xl"
                    >
                        Delete
                    </Link>
                </div>
                <Link href={"/chatBot/chatFlows"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
            </div>
        </div>
    )
}

export default page