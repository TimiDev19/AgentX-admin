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
                <div className=" z-[10] min-h-[319px] w-[378px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-start justify-start">
                    <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Edit Department</h1>


                    <div className=' w-full flex items-center justify-between mb-[5px]'>
                        <h1 className=' text-[13px] text-black dark:text-white'>Create</h1>
                    </div>


                    <div className=" w-full flex items-center justify-center mb-[20px]">
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
                                    className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors duration-200
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
                                    className={`w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors duration-200
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

                    <div className="bg-transparent flex flex-col items-center justify-start w-[100%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-1">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Department Name</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                        </div>
                    </div>

                    <Link
                        href={"/userManagement/departments/addDepartment/success"}
                        className=" w-[330px] mx-auto flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
                    >
                        Edit
                    </Link>
                </div>
                <Link href={"/userManagement/departments"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
            </div>
        </div>
    )
}

export default page