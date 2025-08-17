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

                <h1 className=' text-black font-semibold dark:text-white'>Ticket Details</h1>
            </div>

            <div className=" mb-[20px] w-full min-h-[241px] rounded-2xl bg-white dark:bg-black p-[20px]">
                <h1 className=" text-[18px] text-black dark:text-white font-semibold">Un Assigned</h1>
                <p className=" text-[#00000080] dark:text-[#FFFFFF80] mb-[20px]">#1245272916</p>
                <div className=" flex items-center justify-between w-full">
                    <div className=" p-[10px] min-h-[128px] bg-[#F5F5F5] dark:bg-[#121212] flex flex-col items-center justify-center w-[33%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Created By</p>
                            <p className=" text-black dark:text-white">User</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Creator ID</p>
                            <p className=" text-black dark:text-[#AB4FA8]">123262720</p>
                        </div>
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Creator Name</p>
                            <p className=" text-black dark:text-white">John Jacob</p>
                        </div>
                    </div>
                    <div className=" p-[10px] min-h-[128px] bg-[#F5F5F5] dark:bg-[#121212] flex flex-col items-center justify-center w-[33%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Ticket Type</p>
                            <p className=" text-black dark:text-white">Payment</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Issue Type</p>
                            <p className=" text-black dark:text-white">Payment</p>
                        </div>
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Date & Time</p>
                            <p className=" text-black dark:text-white">28/09/2023 - 12:34 AM</p>
                        </div>
                    </div>
                    <div className=" p-[10px] min-h-[128px] bg-[#F5F5F5] dark:bg-[#121212] flex flex-col items-center justify-start w-[33%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Description by User</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-black dark:text-white">Comment goes in this box</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mb-[20px] w-full min-h-[241px] rounded-2xl bg-white dark:bg-black p-[20px]">
                <h1 className=" text-[18px] text-black dark:text-white font-semibold mb-[20px]">History</h1>
                <div className=" flex items-center justify-start w-full">
                    <div className=" mr-[2%] p-[10px] min-h-[128px] bg-[#F5F5F5] dark:bg-[#121212] flex flex-col items-center justify-center w-[33%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Assigned To</p>
                            <p className=" text-black dark:text-white">John Jacob</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Asignee ID</p>
                            <p className=" text-black dark:text-[#AB4FA8]">123262720</p>
                        </div>
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Date & Time</p>
                            <p className=" text-black dark:text-white">28/09/2023 - 12:34 AM</p>
                        </div>
                    </div>
                    <div className=" min-h-[128px] bg-transparent flex flex-col items-center justify-start w-[33%] rounded-2xl">
                        <div className=" w-full flex items-center justify-between mb-2">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Description by Agent</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-[362px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mb-[20px] w-full min-h-[120px] rounded-2xl bg-white dark:bg-black p-[20px] flex items-center justify-between">
                <div className=" bg-transparent flex flex-col items-center justify-start w-[33%] rounded-2xl">
                    <div className=" w-full flex items-center justify-between mb-2">
                        <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Assign To</p>
                    </div>
                    <div className=" w-full flex items-center justify-between mb-2">
                        <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-[362px]" ></select>
                    </div>
                </div>
                <div className=" bg-transparent flex flex-col items-center justify-start w-[33%] rounded-2xl">
                    <div className=" w-full flex items-center justify-between mb-2">
                        <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Status</p>
                    </div>
                    <div className=" w-full flex items-center justify-between mb-2">
                        <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-[362px]" ></select>
                    </div>
                </div>
                <div className="bg-transparent flex flex-col items-center justify-start w-[33%] rounded-2xl">
                    <div className=" w-full flex items-center justify-between mb-2">
                        <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Comment</p>
                    </div>
                    <div className=" w-full flex items-center justify-between mb-2">
                        <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-[362px]" ></select>
                    </div>
                </div>
            </div>


            <div className=' mb-[20px] w-full h-[96px] bg-white dark:bg-black rounded-2xl flex items-center justify-center'>
                <Link
                    href={"/customerCare/ticketCloseVerify/"}
                    className=" w-[209px] flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl"
                >
                    Review and Close Ticket
                </Link>
            </div>
        </div>
    )
}

export default page