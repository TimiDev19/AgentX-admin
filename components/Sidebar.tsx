// "use client"
// import React, { useState } from 'react'
// import ellipse6 from "@/assets/Ellipse 6.png"
// import Link from 'next/link'
// import Image from 'next/image'
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import logo from "@/assets/light-logo.png"
// import darkLogo from "@/assets/logo.png"
// import useDarkMode from '@/hooks/useDarkmode'
// import sideImg from '@/assets/sidebar-profile.png'
// import { IconDashboard, IconLogout, IconMail, IconMouse, IconSettings, IconTicket, IconUser } from '@tabler/icons-react'


// const Sidebar = () => {
//     const { theme, toggleTheme } = useDarkMode();
//     const [agent, setAgent] = useState(true)
//     const [settings, setSettings] = useState(false)
//     const [showSettings, setShowSettings] = useState(true)
//     const [showNotifications, setShowNotifications] = useState(true)
//     const [notifications, setNotificaions] = useState(false)

//     const agentLink = () => {
//         setSettings(false)
//         setNotificaions(false)
//         setAgent(true)
//         setShowNotifications(true)
//         setShowSettings(true)
//     }

//     const settingsLink = () => {
//         setNotificaions(false)
//         setAgent(false)
//         setSettings(true)
//         setShowNotifications(false)
//     }

//     const notificationsLink = () => {
//         setSettings(false)
//         setAgent(false)
//         setNotificaions(true)
//         setShowSettings(false)
//     }
//     return (
//         <div className=' py-[30px] h-[100vh] w-[17vw] absolute  z-[20] bg-white dark:bg-black flex flex-col items-center justify-between'>
//             <div className=' w-full flex-col flex items-center justify-start'>
//                 <Image
//                     src={logo}
//                     alt=''
//                     className=' dark:hidden flex mb-[60px]'
//                 />
//                 <Image
//                     src={darkLogo}
//                     alt=''
//                     className=' dark:flex hidden mb-[60px]'
//                 />

//                 <Link
//                     href={"/"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl border border-black dark:border-[#AB4FA8] bg-[#EDEDED] dark:bg-[#220A21] mb-[10px]'
//                 >
//                     <IconDashboard size={32} stroke={1} className=' mr-[20px]' />
//                     Dashboard
//                 </Link>

//                 <Link
//                     href={"/masterControl"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl hover:border hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21] duration-500 mb-[10px]'
//                 >
//                     <IconSettings size={32} stroke={1} className=' mr-[20px]' />
//                     Master Controls
//                 </Link>

//                 <Link
//                     href={"/userManagement"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl hover:border hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21] duration-500 mb-[10px]'
//                 >
//                     <IconUser size={32} stroke={1} className=' mr-[20px]' />
//                     User Management
//                 </Link>

//                 <Link
//                     href={"/customerCare"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl hover:border hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21] duration-500 mb-[10px]'
//                 >
//                     <IconTicket size={32} stroke={1} className=' mr-[20px]' />
//                     Customer Care
//                 </Link>

//                 <Link
//                     href={"/communication"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl hover:border hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21] duration-500 mb-[10px]'
//                 >
//                     <IconMail size={32} stroke={1} className=' mr-[20px]' />
//                     Communication
//                 </Link>

//                 <Link
//                     href={"/chatBot"}
//                     className=' w-[90%] h-[50px] flex items-center justify-start text-black dark:text-white text-center px-[5px] py-[5px] rounded-xl hover:border hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21] duration-500 mb-[10px]'
//                 >
//                     <IconMouse size={32} stroke={1} className=' mr-[20px]' />
//                     Chat Bot
//                 </Link>
//             </div>

//             <div className=' w-full justify-self-end'>
//                 <div className=' mb-[10px] w-[90%] mx-auto py-2 border-t border-b border-t-[#EDEDED] dark:border-t-[#1B1B1B] border-b-[#EDEDED] dark:border-b-[#1B1B1B] text-black dark:text-white flex items-center justify-between'>
//                     <h1 className=' font-semibold'>Dark Mode</h1>

//                     <div onClick={toggleTheme} className={`duration-500 cursor-pointer w-[42px] p-1 h-[24px] rounded-full flex items-center dark:justify-end dark:bg-[#AB4FA8] justify-start bg-[#E8E8E8]`}>
//                         <div className=' h-[20px] w-[20px] rounded-full bg-white'>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=' w-[90%] mx-auto'>
//                     <div className='cursor-pointer w-full flex items-center justify-end text-black dark:text-white'>
//                         <IconLogout size={28} stroke={1} />
//                     </div>
//                     <div className=' text-center w-full flex flex-col items-center justify-center'>
//                         <div className=' h-[80px] w-[80px] rounded-full bg-transparent mb-4'>
//                             <Image
//                                 src={sideImg}
//                                 alt=''
//                                 className=' h-[80px] w-[80px] rounded-full'
//                             />
//                         </div>
//                         <h1 className=' text-black dark:text-white font-extrabold'>Harish Vishwakarma</h1>
//                         <p className=' text-[#0000008C] dark:text-[#EDEDED]'>Riyadh, Saudi Arabia</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar



"use client"
import React, { useState } from 'react'
import ellipse6 from "@/assets/Ellipse 6.png"
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/light-logo.png"
import darkLogo from "@/assets/logo.png"
import useDarkMode from '@/hooks/useDarkmode'
import sideImg from '@/assets/sidebar-profile.png'
import { IconDashboard, IconLogout, IconMail, IconMouse, IconSettings, IconTicket, IconUser } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const { theme, toggleTheme } = useDarkMode();
    const pathname = usePathname();

    const getLinkClasses = (path: string) => {
        const isActive = pathname === path;
        return `w-[90%] h-[50px] flex items-center justify-start text-center px-[5px] py-[5px] rounded-xl mb-[10px] border duration-500 ${
            isActive
                ? "bg-[#EDEDED] dark:bg-[#220A21] border-black dark:border-[#AB4FA8] text-black dark:text-white"
                : "text-black dark:text-white border-transparent hover:border-black dark:hover:border-[#AB4FA8] hover:bg-[#EDEDED] dark:hover:bg-[#220A21]"
        }`;
    };

    return (
        <div className=' py-[30px] h-[100vh] w-[17vw] absolute z-[20] bg-white dark:bg-black flex flex-col items-center justify-between'>
            <div className='w-full flex-col flex items-center justify-start'>
                <Image src={logo} alt='' className='dark:hidden flex mb-[60px]' />
                <Image src={darkLogo} alt='' className='dark:flex hidden mb-[60px]' />

                <Link href={"/"} className={getLinkClasses("/")}>
                    <IconDashboard size={32} stroke={1} className='mr-[20px]' />
                    Dashboard
                </Link>

                <Link href={"/masterControl"} className={getLinkClasses("/masterControl")}>
                    <IconSettings size={32} stroke={1} className='mr-[20px]' />
                    Master Controls
                </Link>

                <Link href={"/userManagement"} className={getLinkClasses("/userManagement")}>
                    <IconUser size={32} stroke={1} className='mr-[20px]' />
                    User Management
                </Link>

                <Link href={"/customerCare"} className={getLinkClasses("/customerCare")}>
                    <IconTicket size={32} stroke={1} className='mr-[20px]' />
                    Customer Care
                </Link>

                <Link href={"/communication"} className={getLinkClasses("/communication")}>
                    <IconMail size={32} stroke={1} className='mr-[20px]' />
                    Communication
                </Link>

                <Link href={"/chatBot"} className={getLinkClasses("/chatBot")}>
                    <IconMouse size={32} stroke={1} className='mr-[20px]' />
                    Chat Bot
                </Link>
            </div>

            <div className='w-full justify-self-end'>
                <div className='mb-[10px] w-[90%] mx-auto py-2 border-t border-b border-t-[#EDEDED] dark:border-t-[#1B1B1B] border-b-[#EDEDED] dark:border-b-[#1B1B1B] text-black dark:text-white flex items-center justify-between'>
                    <h1 className='font-semibold'>Dark Mode</h1>
                    <div
                        onClick={toggleTheme}
                        className={`duration-500 cursor-pointer w-[42px] p-1 h-[24px] rounded-full flex items-center dark:justify-end dark:bg-[#AB4FA8] justify-start bg-[#E8E8E8]`}
                    >
                        <div className='h-[20px] w-[20px] rounded-full bg-white'></div>
                    </div>
                </div>

                <div className='w-[90%] mx-auto'>
                    <div className='cursor-pointer w-full flex items-center justify-end text-black dark:text-white'>
                        <IconLogout size={28} stroke={1} />
                    </div>
                    <div className='text-center w-full flex flex-col items-center justify-center'>
                        <div className='h-[80px] w-[80px] rounded-full bg-transparent mb-4'>
                            <Image src={sideImg} alt='' className='h-[80px] w-[80px] rounded-full' />
                        </div>
                        <h1 className='text-black dark:text-white font-extrabold'>Harish Vishwakarma</h1>
                        <p className='text-[#0000008C] dark:text-[#EDEDED]'>Riyadh, Saudi Arabia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
