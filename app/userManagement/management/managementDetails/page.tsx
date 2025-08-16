"use client";
import { useState } from "react";
import { IconArrowBack, IconArrowBackUpDouble, IconArrowBadgeLeft, IconArrowBarToLeft, IconCalendar, IconRefresh, IconVector } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import visa from "@/assets/visa.png"
import DoughnutChart from '@/components/charts/DoughnutChart'
import TransactionHistory from '@/components/TransactionHistory'
import SessionHistory from '@/components/SessionHistory'
import IncidentManagement from '@/components/IncidentManagement'
import PredictionChart from '@/components/PredictionChart'

const categories = [
    { name: "Soccer", value: 25, color: "#7B4EFF" },
    { name: "Cricket", value: 25, color: "#46B1E7" },
    { name: "Basket Ball", value: 25, color: "#2C8C57" },
    { name: "American Football", value: 25, color: "#C24655" },
];

const results = [
    { name: "Win", value: 25, color: "#2C8C57" },
    { name: "Loss", value: 25, color: "#C24655" },
    { name: "Win", value: 25, color: "#2C8C57" },
    { name: "Loss", value: 25, color: "#C24655" },
];

const page = () => {
    const [checked, setChecked] = useState(false);
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
                    href={"/userManagement"}
                    className=' text-black dark:text-[#AB4FA8] mr-[15px] font-extrabold'
                >
                    {/* <IconArrowBackUpDouble size={14} className=' mr-2' stroke={3} /> */}
                    &lt;
                </Link>

                <h1 className=' text-black font-semibold dark:text-white'>Management User Details</h1>
            </div>

            <div className=' w-full flex items-center justify-between mb-[20px]'>
                <div className=" w-[35%] min-h-[405px] bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=' flex items-center justify-start w-full mb-[15px]'>
                        <div className=' mr-[15px] h-[84px] w-[84px] rounded-full bg-blue-600 text-blue-900 flex items-center justify-center'>
                            <h1 className=' text-[30px]'>HV</h1>
                        </div>
                        <div>
                            <div className=' text-[18px] font-semibold text-black dark:text-white'>John Jacob</div>
                            <p className=' text-[16px] text-[#00000080] dark:text-white'>#1245272916</p>
                        </div>
                    </div>

                    <div className=' w-full flex items-center justify-center'>
                        <div className=' w-full rounded-xl p-[20px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] min-h-[152px] flex flex-col items-center justify-between'>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Name</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>Tom Holland</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Mobile No</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>+966589975437</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Email</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>John@rabet.sa</h1>
                            </div>
                        </div>
                    </div>

                    <div className=' w-full'>
                        <button className=' cursor-pointer bg-[#000] text-white rounded-xl min-h-[33px] px-2 text-[16px] mr-2'>Edit</button>
                        <button className=' cursor-pointer bg-red-500 text-white rounded-xl min-h-[33px] px-2 text-[16px] mr-2'>Delete</button>
                        <button className=' cursor-pointer bg-[#CE2BDD] text-white rounded-xl min-h-[33px] px-2 text-[16px] mr-2'>Delete</button>
                        <button className=' cursor-pointer bg-[#DEB875] text-white rounded-xl min-h-[33px] px-2 text-[16px] mr-2'>Generate Report</button>
                    </div>
                </div>

                <div className=" w-[63%] min-h-[405px] bg-white dark:bg-black dark:text-white rounded-2xl p-[15px]">
                    <h1 className=' text-black dark:text-white font-bold text-[18px] mb-[20px]'>Rules</h1>

                    <div className=' w-full flex items-center justify-between'>
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
            </div>


            <div className=' mb-[20px]'>
                <IncidentManagement />
            </div>
        </div>
    )
}

export default page