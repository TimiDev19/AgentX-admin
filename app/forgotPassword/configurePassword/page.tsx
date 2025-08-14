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
import ellipse6 from "@/assets/Ellipse 6.png"

const page = () => {
    return (
        <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
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
            </div>
            <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
                <Image
                    src={loginLogo}
                    alt=""
                    className=" mb-[20px]"
                />
                <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Welcome To Agent X</h1>
                <div className=" w-[95%] mb-[20px]">
                    <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">Set New Password</label>
                    <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">

                        <input type="password" className="w-full bg-transparent dark:text-white focus:outline-none px-2" />
                    </div>
                </div>

                <div className=" w-[95%] mb-[20px]">
                    <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">Confirm New Password</label>
                    <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">

                        <input type="password" className="w-full bg-transparent dark:text-white focus:outline-none px-2" />
                    </div>
                </div>

                <Link
                    href={"/dashboard"}
                    className=" w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl"
                >
                    Login
                </Link>
            </div>
        </div>
    )
}

export default page