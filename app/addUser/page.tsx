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
    const [checked, setChecked] = useState(false);
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
                <div className=" z-[10] min-h-[452px] w-[724px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-start justify-start">
                    <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Add New User</h1>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Country</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">City</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Name</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Email Address</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Mobile No.</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Department</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full">
                        <h1 className=" text-black dark:text-white font-bold text-[18px] mb-[10px]">Rules</h1>
                        <div className=' w-full flex items-center justify-between mb-[10px]'>
                            <h1 className=' text-[14px] text-black dark:text-white'>Dashboard</h1>

                            <div className=' h-[18px] w-[18px] bg-[#EDEDED] dark:bg-[#220A21] rounded-full flex items-center justify-center'>
                                <h1 className=' font-extrabold text-black dark:text-[#AB4FA8]'>-</h1>
                            </div>
                        </div>
                        <div className=" flex items-center justify-start w-full mb-[20px]">
                            <div className=" flex items-center justify-center w-fit mr-[20px]">
                                <label className="inline-flex items-center cursor-pointer mr-2">
                                    {/* Hidden native checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        className="hidden"
                                    />

                                    {/* Custom styled box */}
                                    <span
                                        className={`w-[20px] h-[20px] flex items-center justify-center rounded-lg transition-colors duration-200
          ${checked ? "bg-[#AB4FA8]" : "border-[#ab4fa8] border-2"}`}
                                    >
                                        {checked && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </span>
                                </label>
                                <h1 className=" dark:text-white">Countries</h1>
                            </div>

                            <div className=" flex items-center justify-center w-fit">
                                <label className="inline-flex items-center cursor-pointer mr-2">
                                    {/* Hidden native checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={(e) => setChecked(e.target.checked)}
                                        className="hidden"
                                    />

                                    {/* Custom styled box */}
                                    <span
                                        className={`w-[20px] h-[20px] flex items-center justify-center rounded-lg transition-colors duration-200
          ${checked ? "bg-[#AB4FA8]" : "border-[#ab4fa8] border-2"}`}
                                    >
                                        {checked && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </span>
                                </label>
                                <h1 className=" dark:text-white">Access Dashboard</h1>
                            </div>
                        </div>


                        <div className=' w-full flex items-center justify-between mb-[10px]'>
                            <h1 className=' text-[14px] text-black dark:text-white'>User Management</h1>

                            <div className=' h-[18px] w-[18px] bg-[#EDEDED] dark:bg-[#220A21] rounded-full flex items-center justify-center'>
                                <h1 className=' font-extrabold text-black dark:text-[#AB4FA8]'>+</h1>
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-[10px]'>
                            <h1 className=' text-[14px] text-black dark:text-white'>Customer Care</h1>

                            <div className=' h-[18px] w-[18px] bg-[#EDEDED] dark:bg-[#220A21] rounded-full flex items-center justify-center'>
                                <h1 className=' font-extrabold text-black dark:text-[#AB4FA8]'>+</h1>
                            </div>
                        </div>

                        <div className=' w-full flex items-center justify-between mb-[10px]'>
                            <h1 className=' text-[14px] text-black dark:text-white'>Communication</h1>

                            <div className=' h-[18px] w-[18px] bg-[#EDEDED] dark:bg-[#220A21] rounded-full flex items-center justify-center'>
                                <h1 className=' font-extrabold text-black dark:text-[#AB4FA8]'>+</h1>
                            </div>
                        </div>
                    </div>

                    <Link
                        href={"/addUser/sucsess"}
                        className=" w-[330px] mx-auto flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
                    >
                        Add
                    </Link>
                </div>
                <Link href={"/dashboard"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
            </div>
        </div>
    )
}

export default page