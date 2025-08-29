"use client"
import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import Homepage from "@/components/Homepage/Homepage";
import { IconArrowDown, IconArrowUp, IconCalendar, IconGlobe, IconNetwork, IconRefresh } from "@tabler/icons-react";
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
import ellipse6 from "@/assets/Ellipse 6.png"



const page = () => {
    const labels = [
        'India', 'Australia', 'England', 'Pakistan', 'Team', 'Team', 'Team',
        'Team', 'Team', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX', 'XXX'
    ];
    const data = [
        80, 35, 65, 55, 90, 92, 93, 32, 60, 85, 90, 88, 70, 25, 76, 60
    ];

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const kycTrue = dummyData.users.filter((user) => {
        return user.kyc === "true"
    })

    const kycFalse = dummyData.users.filter((user) => {
        return user.kyc === "false"
    })

    const wins = dummyData.predictions.filter((predictions) => {
        return predictions.win === "true"
    })

    const loss = dummyData.predictions.filter((predictions) => {
        return predictions.win === "false"
    })

    const forFun = dummyData.predictions.filter((pred) => {
        return pred.reason === "for fun"
    })

    const paid = dummyData.predictions.filter((pred) => {
        return pred.reason === "paid"
    })

    const nil = dummyData.predictions.filter((pred) => {
        return pred.reason === "nil"
    })

    const mastercard = dummyData.predictions.filter((pred) => {
        return pred.payment === "mastercard"
    })

    const successfulPayment = dummyData.predictions.filter((pred) => {
        return pred.payout = true
    })

    const failedPayment = dummyData.predictions.filter((pred) => {
        return pred.payout = false
    })

    const wow = dummyData.predictions.filter((pred) => {
        return pred.customerRating === "wow"
    })

    const happy = dummyData.predictions.filter((pred) => {
        return pred.customerRating === "happy"
    })

    const average = dummyData.predictions.filter((pred) => {
        return pred.customerRating === "average"
    })

    const poor = dummyData.predictions.filter((pred) => {
        return pred.customerRating === "poor"
    })

    const whatsapp = dummyData.predictions.filter((pred) => {
        return pred.channel === "Whatsapp"
    })

    const inApp = dummyData.predictions.filter((pred) => {
        return pred.channel === "in-app"
    })

    const webPage = dummyData.predictions.filter((pred) => {
        return pred.channel === "webpage"
    })

    const telegram = dummyData.predictions.filter((pred) => {
        return pred.channel === "telegram"
    })

    const wechat = dummyData.predictions.filter((pred) => {
        return pred.channel === "wechat"
    })
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

            <div className=" w-full h-[179px] bg-white dark:bg-[#000000] rounded-2xl p-[15px] text-black dark:text-white mb-[20px]">
                <div className=" w-full flex items-center justify-end mb-4">
                    <IconNetwork size={28} stroke={1} />
                </div>

                <div className=" w-[98%] mx-auto flex items-center justify-between">
                    <div className=" w-[48%] h-[95px] bg-[#F5F5F5] dark:bg-[#121212] rounded-md flex items-center justify-between p-[10px]">
                        <div>
                            <h1 className=" text-[#00000080] dark:text-[#FFFFFF80] text-[16px]">Today's Users</h1>
                            <h1 className=" text-black dark:text-white font-bold">{dummyData.users.length}</h1>
                        </div>

                        <div className=" bg-[#13B5421A] text-green-500 flex items-center justify-center rounded-full p-1 text-xs">
                            <IconArrowUp stroke={3} size={10} className=" mr-2" />
                            100%
                        </div>
                    </div>

                    <div className=" w-[48%] h-[95px] bg-[#F5F5F5] dark:bg-[#121212] rounded-md flex items-center justify-between p-[10px]">
                        <div>
                            <h1 className=" text-[#00000080] dark:text-[#FFFFFF80] text-[16px]">Total Users</h1>
                            <h1 className=" text-black dark:text-white font-bold">{dummyData.users.length + 3}</h1>
                        </div>

                        <div className=" bg-[#EF42421F] text-red-500 flex items-center justify-center rounded-full p-1 text-xs">
                            <IconArrowDown stroke={3} size={10} className=" mr-2" />
                            35%
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full h-[149px] bg-white dark:bg-black rounded-2xl p-[15px] text-black dark:text-white mb-[10px] flex items-center justify-start overflow-x-scroll scrollbar-hide">
                {
                    dummyData.users.map((user, index) => (
                        <div key={index} className=" flex flex-col items-center justify-center min-w-[110px]">
                            <div className=" h-[48px] w-[48px] rounded-full bg-green-500 bg-tom mb-2"></div>
                            {user.firstName} {user.lastName}
                        </div>
                    ))
                }


                <div className=" flex flex-col items-center justify-center min-w-[110px] dark:text-[#AB4FA8]">
                    <div className=" h-[48px] w-[48px] rounded-full bg-[#F5F5F5] dark:bg-[#121212] mb-2 text-black dark:text-[#AB4FA8] flex items-center justify-center text-xl font-semibold">+</div>
                    Add New
                </div>
            </div>

            <div className=" w-full flex items-center justify-end bg-transparent mb-[10px]">
                <select name="" id="" className=" w-[100px] rounded-md dark:bg-black dark:text-[#FFFFFF80]">
                    <option value="">Cricket</option>
                    <option value="">Soccer</option>
                    <option value="">Basketball</option>
                    <option value="">American Football</option>
                </select>
            </div>

            <div className=" w-full flex items-center justify-between bg-transparent mb-[20px] h-[476px]">
                <div className=" w-[49%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Users</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['KYC', 'No KYC']}
                            data={[kycTrue.length, kycFalse.length]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">KYC</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{kycTrue.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">No KYC</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{kycFalse.length}</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[49%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Prediction</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Win', 'Loss']}
                            data={[wins.length, loss.length]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Win</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{wins.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Loss</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{loss.length}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full min-h-[411px] bg-white dark:bg-black dark:text-white p-[15px] rounded-2xl mb-[20px]">
                <div className=" w-full mb-[30px] flex items-center justify-between">
                    <h1 className=" text-xl font-bold">Teams</h1>

                    <div className=" flex items-center justify-center">
                        <IconNetwork stroke={1} size={28} className=" mx-2" />
                        <IconCalendar stroke={1} size={28} className=" mx-2" />
                    </div>
                </div>
                <div className=" w-full ">
                    <BarChart labels={labels} data={data} />
                </div>
            </div>

            <div className=" w-full flex items-start justify-between bg-transparent mb-[20px] min-h-[476px]">
                <div className=" w-[49%] h-full bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Prediction Type</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['For Fun', 'Paid', 'Not Registered']}
                            data={[forFun.length, paid.length, nil.length]}
                            colors={['#3B82F6', '#166534', '#3F3F46']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">For Fun</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{forFun.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#2B874E] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Paid</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{paid.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Not Registered</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{nil.length}</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[49%] min-h-[476px] bg-white dark:bg-black dark:text-white rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Payments</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Mastercard', 'VISA', 'Apple Pay', 'Google Play', 'WeChat', 'Alipay', 'Binance', 'PayPal', 'Ripio', 'Bitso', 'Kraken']}
                            data={[mastercard.length + 1000, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029, 1029]}
                            colors={['#4DAAE2', '#265D35', '#5D2FD1', '#B4304F', '#DC2797', '#3357D9', '#4DED7B', '#F88A36', '#2E1AA0', '#851A85', '#282828']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Mastercard</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{mastercard.length + 1000}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#265D35] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">VISA</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#5D2FD1] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Apple Pay</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#B4304F] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Google Pay</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#DC2797] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">WeChat</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#3357D9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Alipay</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DED7B] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Binance</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#F88A36] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Paypal</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#2E1AA0] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Ripio</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#851A85] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Bitso</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#282828] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Kraken</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">1029</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full flex items-start justify-between bg-transparent mb-[20px] min-h-[476px]">
                <div className=" w-[49%] h-full bg-white dark:text-white dark:bg-black rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Payout</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Success', 'Fail']}
                            data={[successfulPayment.length, failedPayment.length]}
                            colors={['#4DAAE2', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Sucess</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{successfulPayment.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Fail</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{failedPayment.length}</h1>
                        </div>
                    </div>
                </div>

                <div className=" w-[49%] h-full bg-white dark:text-white dark:bg-black rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Customer Rating</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['Wow', 'Happy', 'Average', 'Poor']}
                            data={[wow.length, happy.length, average.length, poor.length]}
                            colors={['#4DAAE2', '#8659FC', '#2B874E', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] h-fit mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Wow</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{wow.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#8659FC] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Happy</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{happy.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#2B874E] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Average</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{happy.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Poor</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{happy.length}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full flex items-center justify-between bg-transparent mb-[20px] min-h-[476px]">
                <div className=" w-[49%] h-full bg-white dark:text-white dark:bg-black rounded-2xl p-[15px] flex flex-col items-center justify-between">
                    <div className=" w-full mb-[30px] flex items-center justify-between">
                        <h1 className=" text-xl font-bold">Channels Used</h1>

                        <div className=" flex items-center justify-center">
                            <IconNetwork stroke={1} size={28} className=" mx-2" />
                            <IconCalendar stroke={1} size={28} className=" mx-2" />
                        </div>
                    </div>

                    <div className=" w-full flex mb-[30px] items-center justify-center h-[228px]">
                        <DoughnutChart
                            labels={['WhatsApp', 'In-app', 'Webpage', 'Telegram', 'WeChat']}
                            data={[whatsapp.length, inApp.length, webPage.length, telegram.length, wechat.length]}
                            colors={['#4DAAE2', '#8659FC', '#2B874E', '#F03D68', '#A9A9A9']} // blue, green, gray
                        />
                    </div>

                    <div className=" w-full bg-[#F5F5F5] dark:bg-[#1B1B1B] min-h-[96px] mb-[10px] rounded-2xl flex flex-col items-center justify-center py-[10px]">
                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#4DAAE2] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Whatsapp</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{whatsapp.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#8659FC] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">In-app</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{inApp.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#2B874E] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Webpage</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{webPage.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px] mb-4">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#F03D68] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">Telegram</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{telegram.length}</h1>
                        </div>

                        <div className=" w-full flex items-center justify-between px-[20px]">
                            <div className=" flex items-center justify-start">
                                <div className=" h-[12px] w-[12px] bg-[#A9A9A9] rounded-full mr-[12px]"></div>
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80]">WeChat</p>
                            </div>

                            <h1 className=" text-black dark:text-white font-semibold">{wechat.length}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page