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
          href={"/chatBot/chatFlows"}
          className=' text-black dark:text-[#AB4FA8] mr-[15px] font-extrabold'
        >
          {/* <IconArrowBackUpDouble size={14} className=' mr-2' stroke={3} /> */}
          &lt;
        </Link>

        <h1 className=' text-black font-semibold dark:text-white'>Edit Your Chat Flow - Flow F2</h1>
      </div>

      <div className=" w-full flex items-center justify-between">
        <div className=" h-[90vh] overflow-y-scroll w-[33%] bg-white dark:bg-black rounded-xl p-[20px]">
          <h1 className=" text-black dark:text-white text-[18px] font-bold mb-[10px] capitalize">Add chat component</h1>

          <div className=" cursor-pointer mb-[5px] p-[10px] font-semibold w-full h-[48px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-between">
            Frequently Used
            <IconCaretUpFilled stroke={2} size={10} />
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconMessageCircle stroke={1} size={24} className=" mr-2" />
            Message
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconUser stroke={1} size={24} className=" mr-2" />
            Name
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconPhone stroke={1} size={24} className=" mr-2" />
            Phone Number
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconMail stroke={1} size={24} className=" mr-2" />
            Email
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconThumbUp stroke={1} size={24} className=" mr-2" />
            Single Choice
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconTextCaption stroke={1} size={24} className=" mr-2" />
            Text Question
          </div>
          <div className=" duration-500 cursor-pointer mb-[5px] p-[10px] w-full h-[48px] hover:bg-[#F5F5F5] hover:dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-start">
            <IconAi stroke={1} size={24} className=" mr-2" />
            ChatGPT
          </div>
          <div className=" cursor-pointer mb-[5px] p-[10px] font-semibold w-full h-[48px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-between">
            Request Information
            <IconCaretDownFilled stroke={2} size={10} />
          </div>
          <div className=" cursor-pointer mb-[5px] p-[10px] font-semibold w-full h-[48px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-between">
            Send Information
            <IconCaretDownFilled stroke={2} size={10} />
          </div>
          <div className=" cursor-pointer mb-[5px] p-[10px] font-semibold w-full h-[48px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl text-black dark:text-white flex items-center justify-between">
            Trigger Action
            <IconCaretDownFilled stroke={2} size={10} />
          </div>
        </div>

        <div className=" h-[90vh] overflow-y-scroll w-[33%] bg-white dark:bg-black rounded-xl p-[20px] flex items-start justify-center scrollbar-hide">
          <ChatFlowBuilder />
        </div>

        <div className=" h-[90vh] overflow-y-scroll w-[33%] bg-white dark:bg-black rounded-xl p-[20px]">
          <h1 className=" text-black dark:text-white text-[18px] font-bold mb-[20px] capitalize">Customize bot messages</h1>

          <div className=" w-full">
            <div className=" w-full flex items-center justify-start pb-[5px] border-b border-b-[#0000001A] dark:border-b-[#4D4D4D] mb-[15px]">
              <button className="text-[16px] text-black font-semibold dark:text-white mr-[25px]">Customize</button>
              <button className="text-[16px] text-[#00000080] hover:text-black hover:font-semibold dark:text-[#FFFFFF80] dark:hover:text-white duration-500 mr-[25px]">Advance</button>
            </div>

            <div className=" w-full">
              <div className=" w-full flex items-center justify-between">
                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Message</p>
              </div>
              <div className=" w-full flex items-center justify-between mb-2">
                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
              </div>
              <div className=" w-full flex items-center justify-between mb-[10px]">
                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Use “/” to insert the custom variables or dynamic values from the users reponse</p>
              </div>
            </div>

            <div className=" w-full">
              <div className=" w-full flex items-center justify-between">
                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Number of user queries to handle via AI</p>
              </div>
              <div className=" w-full flex items-center justify-between mb-2">
                <input type="text" className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></input>
              </div>
            </div>

            <div className=" w-full">
              <div className=" w-full flex items-center justify-between">
                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px]">Go to next message</p>
              </div>
              <div className=" w-full flex items-center justify-between mb-2">
                <select className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" ></select>
              </div>
            </div>

            <Link
              href={"/chatBot/chatFlows"}
              className=" w-full mt-[20px] mx-auto flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
            >
              Train Your AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page