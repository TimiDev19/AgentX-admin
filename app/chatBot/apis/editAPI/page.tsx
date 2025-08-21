"use client"
import { IconFilter, IconRefresh, IconSearch, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import apiImage from "@/assets/apiImage.png"
import { Images } from 'lucide-react'
import Image from 'next/image'

const page = () => {
    const [isEnabled, setIsEnabled] = useState(false)
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
                    href={"/chatBot"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Bots
                </Link>

                <Link
                    href={"/chatBot/chatFlows"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Chat Flows
                </Link>

                <Link
                    href={"/chatBot/whatsappTemplates"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Whatsapp Templates
                </Link>

                <Link
                    href={"/chatBot/apis"}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    APIs
                </Link>

                <Link
                    href={"/chatBot/customeAttributes"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Custom Attributes
                </Link>

                <Link
                    href={"/chatBot/3rdPartyIntegrations"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    3rd Party Integrations
                </Link>
            </div>

            <div className=' w-full h-[696px] bg-white dark:bg-black rounded-xl p-[20px]'>
                <div className=' w-full flex items-center justify-between'>
                    <Link
                        href={"/chatBot/apis"}
                        className=' text-black dark:text-[#AB4FA8] mr-[5px] font-extrabold'
                    >
                        {/* <IconArrowBackUpDouble size={14} className=' mr-2' stroke={3} /> */}
                        &lt;
                    </Link>
                    <input type="text" placeholder='Get' className=' h-[48px] w-[200px] focus:outline-none border-none bg-[#F5F5F5] dark:bg-[#121212] rounded-xl p-2 placeholder:text-[#00000080] text-[#00000080] dark:placeholder:text-[#FFFFFF80] dark:text-[#FFFFFF80] ' />
                    <select className=' h-[48px] w-[200px] focus:outline-none border-none bg-[#F5F5F5] dark:bg-[#121212] rounded-xl p-2 placeholder:text-[#00000080] text-[#00000080] dark:placeholder:text-[#FFFFFF80] dark:text-[#FFFFFF80] '>
                        <option value="">GET</option>
                    </select>
                    <input type="text" placeholder='https://asdasd.asd/sads' className=' h-[48px] min-w-[50%] focus:outline-none border-none bg-[#F5F5F5] dark:bg-[#121212] rounded-xl p-2 placeholder:text-[#00000080] text-[#00000080] dark:placeholder:text-[#FFFFFF80] dark:text-[#FFFFFF80] ' />
                    <button className=' h-[48px] px-[10px] rounded-xl min:w-[137px] flex items-center justify-center text-white dark:bg-[#AB4FA8] bg-black'>
                        Add API
                    </button>
                </div>

                <div className=' w-full mt-[20px] h-[600px] overflow-y-scroll scrollbar-hide flex-col items-start justify-between flex'>
                    <div className=" w-full flex items-center justify-start pb-[5px] border-b border-b-[#0000001A] dark:border-b-[#4D4D4D] mb-[15px]">
                        <button className="text-[16px] text-black font-semibold dark:text-white mr-[25px]">Parameters</button>
                        <button className="text-[16px] text-[#00000080] hover:text-black hover:font-semibold dark:text-[#FFFFFF80] dark:hover:text-white duration-500 mr-[25px]">Headers</button>
                        <button className="text-[16px] text-[#00000080] hover:text-black hover:font-semibold dark:text-[#FFFFFF80] dark:hover:text-white duration-500 mr-[25px]">Body</button>
                        <button className="text-[16px] text-[#00000080] hover:text-black hover:font-semibold dark:text-[#FFFFFF80] dark:hover:text-white duration-500 mr-[25px]">Manage API Response</button>
                    </div>
                    <div className=' w-full h-[400px] flex items-center justify-between'>
                        <div className=' w-[45%] h-[400px] overflow-y-scroll'>
                            <div className=" w-full flex items-center justify-between mb-[20px] text-black dark:text-white">
                                <div className=" w-[45%]">
                                    <div className=" w-full flex items-center justify-between">
                                        <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Key</p>
                                    </div>
                                    <div className=" w-full flex items-center justify-between mb-2">
                                        <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                                    </div>
                                </div>

                                <div className=" w-[45%]">
                                    <div className=" w-full flex items-center justify-between">
                                        <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Value</p>
                                    </div>
                                    <div className=" w-full flex items-center justify-between mb-2">
                                        <input type='text' className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
                                    </div>
                                </div>

                                <div className=' cursor-pointer'><IconTrash stroke={2} /></div>
                            </div>
                            <p className=" text-[black] cursor-pointer dark:text-[#AB4FA8] font-semibold text-[13px]">+ Add another field</p>
                        </div>
                        <div className=' w-[1px] h-full bg-[#4D4D4D] dark:bg-[#4D4D4D]'></div>
                        <div className=' w-[45%] h-full flex flex-col items-center justify-start'>
                            <Image
                                src={apiImage}
                                alt=''
                                className=' w-full'
                            />
                        </div>
                    </div>
                    <Link
                        href={"/chatBot/apis/"}
                        className=" w-[30%] mt-[20px] flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
                    >
                        Save
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default page