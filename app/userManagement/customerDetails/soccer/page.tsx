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
                    className=' mr-[15px] hover:text-black dark:hover:text-white duration-500'
                >
                    All Sports
                </Link>

                <Link
                    href={"/userManagement/customerDetails/soccer"}
                    className=' text-black dark:text-white mr-[15px]'
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

            <div className=" w-full flex items-center justify-between bg-transparent mb-[20px] h-[476px]">
                <div className=" w-[33%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
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
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>User Main ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>WhatsApp ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-1</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Telegram ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-2</h1>
                            </div>

                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>WeChat ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-3</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>App ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-4</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Web ID</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>HV-196728628-5</h1>
                            </div>
                            <div className='mb-1 w-full flex items-center justify-between'>
                                <h1 className=' dark:text-[#FFFFFF80] text-[#00000080]'>Latest User Channel</h1>
                                <h1 className=' dark:text-white text-black font-semibold'>Whatsapp</h1>
                            </div>
                        </div>
                    </div>

                    <div className=' w-full'>
                        <button className=' cursor-pointer bg-[#DEB875] text-white rounded-full min-h-[33px] px-2 text-[16px]'>Generate Report</button>
                    </div>
                </div>

                <div className=" w-[33%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Prediction</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Paid', 'Fun']}
                            data={[1891, 1029]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Paid</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1891</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Fun</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[33%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Other Prediction</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Paid', 'Fun']}
                            data={[1891, 1029]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Paid</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1891</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Fun</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full flex items-start justify-between bg-transparent mb-[20px] min-h-[476px]">
                <div className=" w-[33%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Results</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Win', 'Loss']}
                            data={[1891, 1029]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Win</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1891</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Loss</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[33%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Prediction Details</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Score', 'Yellow Cards', 'Red Cards', 'Penalty']}
                            data={[1891, 1029, 1029, 1891]}
                            colors={['#4DAAE2', '#5D2FD1', '#265D35', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-2">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Score</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1891</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-2">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#5D2FD1] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Yellow Cards</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-2">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#265D35] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Red Cards</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Penalty</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[33%] h-full bg-white dark:text-white dark:bg-black rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Other Prediction</h1>

                        <div className=" flex items-center justify-center">
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['WhatsApp', 'In-app', 'Webpage', 'Telegram', 'WeChat']}
                            data={[1029, 1891, 1234, 3214, 4387]}
                            colors={['#4DAAE2', '#8659FC', '#2B874E', '#F03D68', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Whatsapp</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{1029}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#8659FC] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">In-app</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{1891}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#2B874E] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Webpage</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{1234}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#F03D68] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Telegram</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{3214}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">WeChat</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{4387}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' mb-[20px]'>
                <SessionHistory />
            </div>
        </div>
    )
}

export default page