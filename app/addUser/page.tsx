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
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    // form state
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [department, setDepartment] = useState("");
    const [roles, setRoles] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("https://api-test.kardiboxes.com/api/usermanagement/add-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc1NTUyMzA5NSwiZXhwIjoxNzU2MTI3ODk1fQ.fnVi3Fw7hY2eddWoWg62fTQkutviXCOotk2-ghthGZ4`
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email,
                    phone,
                    country,
                    city: city || null,
                    department,
                    roles: roles.length ? roles : ["dashboard"], // fallback example
                }),
            });

            const data = await res.json();
            console.log("Add User Response:", data);

            if (res.ok) {
                router.push("/addUser/sucsess");
            } else {
                setError(data.message || "Failed to add user");
            }
        } catch (err) {
            console.error("Error adding user:", err);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
            <div className=" flex items-start justify-center">
                <div className=" z-[10] min-h-[452px] w-[724px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-start justify-start">
                    <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Add New User</h1>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Country</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" >
                                    <option value="">Select Country</option>
                                    <option value="UAE">UAE</option>
                                    <option value="Nigeria">Nigeria</option>
                                </select>
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">City</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" >
                                    <option value="">Select City</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Abu Dhabi">Abu Dhabi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Name</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Email Address</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between mb-[15px]">
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Mobile No.</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
                                />
                            </div>
                        </div>
                        <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
                            <div className=" w-full flex items-center justify-between mb-2">
                                <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Department</p>
                            </div>
                            <div className=" w-full flex items-center justify-between mb-2">
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full" >
                                    <option value="">Select Department</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full">
                        <h1 className=" text-black dark:text-white font-bold text-[18px] mb-[10px]">Rules</h1>
                        <div className=' w-full flex items-center justify-between mb-[10px]'>
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

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className=" w-[330px] mx-auto flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
                    >
                        Add
                    </button>
                </div>
                <Link href={"/dashboard"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
            </div>
        </div>
    )
}

export default page


// "use client"
// import BarChart from "@/components/charts/BarChart";
// import DoughnutChart from "@/components/charts/DoughnutChart";
// import Homepage from "@/components/Homepage/Homepage";
// import { IconArrowDown, IconArrowUp, IconCalendar, IconCheck, IconGlobe, IconNetwork, IconRefresh } from "@tabler/icons-react";
// import { useState } from "react";
// import loginLogo from "@/assets/login_logo.png"
// import Image from "next/image";
// import dummyData from "@/helpers/helpers";
// import Link from "next/link";
// import ellipse from "@/assets/biggest.png"
// import ellipse1 from "@/assets/second-biggest.png"
// import ellipse2 from "@/assets/Ellipse 15.png"
// import ellipse3 from "@/assets/Ellipse 14.png"
// import ellipse4 from "@/assets/Ellipse 13.png"
// import ellipse5 from "@/assets/Ellipse 12.png"
// import sideImg from '@/assets/sidebar-profile.png'
// import { useRouter } from "next/navigation";

// const page = () => {
//     const router = useRouter();
//     const [checked, setChecked] = useState(false);

//     // form state
//     const [firstname, setFirstname] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [country, setCountry] = useState("");
//     const [city, setCity] = useState("");
//     const [department, setDepartment] = useState("");
//     const [roles, setRoles] = useState<string[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");

//     const handleSubmit = async () => {
//         setLoading(true);
//         setError("");
//         try {
//             const res = await fetch("https://api-test.kardiboxes.com/api/usermanagement/add-user", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc1NTUyMzA5NSwiZXhwIjoxNzU2MTI3ODk1fQ.fnVi3Fw7hY2eddWoWg62fTQkutviXCOotk2-ghthGZ4`
//                 },
//                 body: JSON.stringify({
//                     firstname,
//                     lastname,
//                     email,
//                     phone,
//                     country,
//                     city: city || null,
//                     department,
//                     roles: roles.length ? roles : ["dashboard"], // fallback example
//                 }),
//             });

//             const data = await res.json();
//             console.log("Add User Response:", data);

//             if (res.ok) {
//                 router.push("/addUser/sucsess");
//             } else {
//                 setError(data.message || "Failed to add user");
//             }
//         } catch (err) {
//             console.error("Error adding user:", err);
//             setError("Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
//             <div className=" flex items-start justify-center">
//                 <div className=" z-[10] min-h-[452px] w-[724px] bg-white dark:bg-black rounded-xl p-[30px] flex flex-col items-start justify-start">
//                     <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">Add New User</h1>

//                     {/* Country + City */}
//                     <div className=" w-full flex items-center justify-between mb-[15px]">
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Country</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <select
//                                     value={country}
//                                     onChange={(e) => setCountry(e.target.value)}
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 >
//                                     <option value="">Select Country</option>
//                                     <option value="UAE">UAE</option>
//                                     <option value="Nigeria">Nigeria</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">City</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <select
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 >
//                                     <option value="">Select City</option>
//                                     <option value="Dubai">Dubai</option>
//                                     <option value="Abu Dhabi">Abu Dhabi</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Name + Email */}
//                     <div className=" w-full flex items-center justify-between mb-[15px]">
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Name</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <input
//                                     type="text"
//                                     value={firstname}
//                                     onChange={(e) => setFirstname(e.target.value)}
//                                     placeholder="First Name"
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 />
//                             </div>
//                         </div>
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Email Address</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Email"
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Phone + Department */}
//                     <div className=" w-full flex items-center justify-between mb-[15px]">
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Mobile No.</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <input
//                                     type="text"
//                                     value={phone}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     placeholder="081234567890"
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 />
//                             </div>
//                         </div>
//                         <div className="bg-transparent flex flex-col items-center justify-start w-[49%] rounded-2xl">
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <p className=" text-[#00000080] dark:text-[#FFFFFF80] text-[13px] font-bold">Department</p>
//                             </div>
//                             <div className=" w-full flex items-center justify-between mb-2">
//                                 <select
//                                     value={department}
//                                     onChange={(e) => setDepartment(e.target.value)}
//                                     className=" text-black dark:text-white bg-transparent border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl p-2 focus:outline-none w-full"
//                                 >
//                                     <option value="">Select Department</option>
//                                     <option value="IT">IT</option>
//                                     <option value="HR">HR</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Roles */}
//                     <div className=" w-full">
//                         <h1 className=" text-black dark:text-white font-bold text-[18px] mb-[10px]">Rules</h1>
//                         {/* Keep your checkboxes here – I won’t modify their UI */}
//                     </div>

//                     {error && <p className="text-red-500 mb-3">{error}</p>}

//                     <button
//                         onClick={handleSubmit}
//                         disabled={loading}
//                         className=" w-[330px] mx-auto flex items-center justify-center text-white bg-[#000] dark:bg-[#AB4FA8] hover:bg-[black]/60 dark:hover:bg-[#AB4FA8]/60 duration-500 h-[48px] rounded-xl"
//                     >
//                         {loading ? "Adding..." : "Add"}
//                     </button>
//                 </div>
//                 <Link href={"/dashboard"} className=" z-[10] h-[32px] w-[32px] bg-[#0000004D] dark:bg-[#FFFFFF4D] cursor-pointer rounded-full ml-4 text-black dark:text-white flex items-center justify-center">X</Link>
//             </div>
//         </div>
//     )
// }

// export default page;
