"use client"
import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import Homepage from "@/components/Homepage/Homepage";
import { IconArrowDown, IconArrowUp, IconCalendar, IconCheck, IconGlobe, IconNetwork, IconRefresh } from "@tabler/icons-react";
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
            <div className=" flex items-start justify-center">
                <div className=" z-[10] max-h-[452px] w-[724px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-start justify-start">
                    <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Add Prediction</h1>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Prediction Title</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <Link
                            href={"/dashboard"}
                            className=" w-[49%] flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-2xl"
                        >
                            Add Prediction
                        </Link>
                    </div>

                </div>
                <Link href={"/dashboard"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
            </div>
        </div>
    )
}

export default page