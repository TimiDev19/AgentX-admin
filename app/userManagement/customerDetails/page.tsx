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

                <h1 className=' text-black font-semibold dark:text-white'>Customer Details</h1>
            </div>

            <div className=' w-full py-[15px] px-[10px] text-[#00000080] dark:text-[#FFFFFF80] flex items-center justify-start bg-white dark:bg-black rounded-xl mb-[20px]'>
                <Link
                    href={"/userManagement/customerDetails"}
                    className=' text-black dark:text-white mr-[15px]'
                >
                    All Sports
                </Link>

                <Link
                    href={"/userManagement/customerDetails/soccer"}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Soccer
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Cricket
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    Basket Ball
                </Link>

                <Link
                    href={""}
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    American Football
                </Link>
            </div>

            <div className=' w-full min-h-[308px] rounded-2xl bg-white dark:bg-black p-[20px] mb-[25px]'>
                <div className=' w-full flex items-center justify-between mb-6'>
                    <div className=' flex items-center justify-center'>
                        <div className=' mr-[15px] h-[84px] w-[84px] rounded-full bg-blue-600 text-blue-900 flex items-center justify-center'>
                            <h1 className=' text-[30px]'>HV</h1>
                        </div>
                        <div>
                            <div className=' text-[18px] font-semibold text-black dark:text-white'>John Jacob</div>
                            <p className=' text-[16px] text-[#00000080] dark:text-white'>#1245272916</p>
                        </div>
                    </div>

                    <button className=' cursor-pointer bg-[#DEB875] text-white rounded-full min-h-[33px] px-2 text-[16px]'>Generate Report</button>
                </div>

                <div className=' w-full rounded-xl p-[20px] bg-[#F5F5F5] dark:bg-[#121212] border border-[#0000001A] min-h-[152px] flex items-center justify-between'>
                    <div className=' w-[30%] h-full'>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Name</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>Tom Holland</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>User Main ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>WeChat ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-3</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Latest User Channel</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>Whatsapp</h1>
                        </div>
                    </div>
                    <div className=' w-[30%] h-full'>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Mobile No</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>+966589975437</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>WhatsApp ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-1</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>App ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-4</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Personal Status</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>Pass</h1>
                        </div>
                    </div>
                    <div className=' w-[30%] h-full'>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Category</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>Business</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Telegram ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-2</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Web ID</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-5</h1>
                        </div>
                        <div className=' mb-2 w-full flex items-center justify-between'>
                            <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Personal Level</h1>
                            <h1 className=' dark:text-white text-black font-semibold'>one</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full flex items-center justify-between mb-[25px]'>
                <div className=' w-[67%] min-h-[516px] bg-white dark:bg-black rounded-2xl p-[20px]'>
                    <h1 className=' text-black dark:text-white font-bold text-[20px] mb-[10px]'>Saved Cards</h1>
                    <div className=' w-full grid grid-cols-2'>
                        <div className=' mb-4 w-[97%] bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[74px] flex items-center justify-between rounded-xl p-2'>
                            <div>
                                <h1 className=' dark:text-[#FFFFFF80] text-[16px] text-[#00000080]'>Card No.</h1>
                                <h1 className=' text-black dark:text-white font-semibold text-[16px]'>4002 6778 2662 2822</h1>
                            </div>

                            <Image
                                src={visa}
                                alt=''
                            />
                        </div>
                        <div className=' mb-4 w-[97%] bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[74px] flex items-center justify-between rounded-xl p-2'>
                            <div>
                                <h1 className=' dark:text-[#FFFFFF80] text-[16px] text-[#00000080]'>Card No.</h1>
                                <h1 className=' text-black dark:text-white font-semibold text-[16px]'>4002 6778 2662 2822</h1>
                            </div>

                            <Image
                                src={visa}
                                alt=''
                            />
                        </div>
                        <div className=' mb-4 w-[97%] bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[74px] flex items-center justify-between rounded-xl p-2'>
                            <div>
                                <h1 className=' dark:text-[#FFFFFF80] text-[16px] text-[#00000080]'>Card No.</h1>
                                <h1 className=' text-black dark:text-white font-semibold text-[16px]'>4002 6778 2662 2822</h1>
                            </div>

                            <Image
                                src={visa}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className=' w-[31%] min-h-[516px] bg-white dark:bg-black rounded-2xl p-[25px] dark:text-white'>
                    <div className=" w-full mb-[40px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Users</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Closed', 'Open', 'Pending']}
                            data={[100, 234, 137]}
                            colors={['#265D35', '#B4304F', '#F88A36']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#265D35] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Closed</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">100</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#B4304F] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Open</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">234</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#F88A36] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Pending</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">137</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' mb-[20px]'>
                <TransactionHistory />
            </div>

            <div className="grid grid-cols-4 gap-4 mb-[20px]">
                <PredictionChart
                    title="Result"
                    categories={categories}
                    values={results}
                />
                <PredictionChart
                    title="Predictions"
                    categories={categories}
                    values={[
                        { name: "Fun", value: 25, color: "#7B4EFF" },
                        { name: "Paid", value: 25, color: "#46B1E7" },
                        { name: "Fun", value: 25, color: "#2C8C57" },
                        { name: "Paid", value: 25, color: "#C24655" },
                    ]}
                />
                <PredictionChart
                    title="Other Prediction"
                    categories={categories}
                    values={[
                        { name: "Paid", value: 25, color: "#46B1E7" },
                        { name: "Fun", value: 25, color: "#7B4EFF" },
                        { name: "Paid", value: 25, color: "#2C8C57" },
                        { name: "Fun", value: 25, color: "#C24655" },
                    ]}
                />
                <PredictionChart
                    title="Prediction Level"
                    categories={categories}
                    values={[
                        { name: "Low", value: 12, color: "#2C8C57" },
                        { name: "Normal", value: 12, color: "#46B1E7" },
                        { name: "Medium", value: 12, color: "#7B4EFF" },
                        { name: "High", value: 12, color: "#C24655" },
                        { name: "Very High", value: 12, color: "#000033" },
                    ]}
                />
            </div>

            <div className=' mb-[20px]'>
                <SessionHistory />
            </div>

            <div className=' mb-[20px]'>
                <IncidentManagement />
            </div>
        </div>
    )
}

export default page