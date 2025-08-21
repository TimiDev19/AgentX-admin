"use client";
import { useState } from "react";
import { IconAi, IconArrowBack, IconArrowBackUpDouble, IconArrowBadgeLeft, IconArrowBarToLeft, IconCalendar, IconCaretDownFilled, IconCaretUp, IconCaretUpFilled, IconMail, IconMessage, IconMessageCircle, IconMessageCircleBolt, IconMessageCircleCode, IconMessageCircleCog, IconPhone, IconRefresh, IconTextCaption, IconThumbUp, IconUser, IconVector } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import visa from "@/assets/visa.png"
import DoughnutChart from '@/components/charts/DoughnutChart'
import TransactionHistory from '@/components/TransactionHistory'
import SessionHistory from '@/components/SessionHistory'
import IncidentManagement from '@/components/IncidentManagement'
import PredictionChart from '@/components/PredictionChart'
import ChatFlowBuilder from "@/components/ChatFlowBuilder";

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
    const [mode, setmode] = useState("customize")

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
                    href={"/chatBot/whatsappTemplates"}
                    className=' text-black dark:text-[#AB4FA8] mr-[15px] font-extrabold'
                >
                    {/* <IconArrowBackUpDouble size={14} className=' mr-2' stroke={3} /> */}
                    &lt;
                </Link>

                <h1 className=' text-black font-semibold dark:text-white'>Create Whatsapp Template</h1>
            </div>

            <div className=" w-full h-[80vh] overflow-y-scroll scrollbar-hide bg-white dark:bg-black text-black dark:text-white rounded-2xl p-[20px]">
                <h1 className=" text-black dark:text-white text-[18px] font-bold mb-[25px] capitalize">Template Meta</h1>

                <div className=" w-full flex items-center justify-between mb-[20px]">
                    <div className=" w-[30%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Name</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                        </div>
                    </div>

                    <div className=" w-[30%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Select Category</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                        </div>
                    </div>

                    <div className=" w-[30%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Select Language</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-start mb-[20px]">
                    <div className=" w-[30%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[black] dark:text-[#fff] font-semibold text-[18px]">Header <span className=" font-thin">(Optional)</span></p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-start mb-[20px]">
                    <div className=" w-[100%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[black] dark:text-[#fff] font-semibold text-[18px]">Body</p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <input type="text" className=" text-black h-[96px] dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                        </div>
                        <div className=" flex items-center justify-end">
                            <p className=" text-[black] cursor-pointer dark:text-[#AB4FA8] font-semibold text-[13px]">Add variable</p>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-start mb-[20px]">
                    <div className=" w-[100%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[black] dark:text-[#fff] font-semibold text-[18px]">Footer <span className=" font-thin">(Optional)</span></p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-start mb-[20px]">
                    <div className=" w-[30%]">
                        <div className=" w-full flex items-center justify-between">
                            <p className=" text-[black] dark:text-[#fff] font-semibold text-[18px]">Buttons <span className=" font-thin">(Optional)</span></p>
                        </div>
                        <div className=" w-full flex items-center justify-between mb-2">
                            <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
                        </div>
                    </div>
                </div>

                <Link
                    href={"/chatBot/whatsappTemplates"}
                    className=" w-[30%] mt-[20px] flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
                >
                    Create
                </Link>
            </div>

        </div>
    )
}

export default page