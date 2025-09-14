"use client";
import { useState } from "react";
import Image from "next/image";
import loginLogo from "@/assets/login_logo.png";
import ellipse from "@/assets/biggest.png";
import ellipse1 from "@/assets/second-biggest.png";
import ellipse2 from "@/assets/Ellipse 15.png";
import ellipse3 from "@/assets/Ellipse 14.png";
import ellipse4 from "@/assets/Ellipse 13.png";
import ellipse5 from "@/assets/Ellipse 12.png";

const Page = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setError("");
    setLoading(true);

    try {
      const phone = localStorage.getItem("phone"); // save phone in localStorage during send-otp step

      if (!phone) {
        setError("Phone number not found. Please restart the process.");
        setLoading(false);
        return;
      }

      const res = await fetch("https://api-test.kardiboxes.com/api/adminauth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to verify OTP");
      }

      // ✅ Success — redirect to configure password page
      window.location.href = "/forgotPassword/configurePassword";
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" z-[100] h-[100vh] w-[100vw] bg-[#F5F5F5] dark:bg-[#121212] relative flex items-center justify-center overflow-y-hidden">
      <div className=" absolute h-full w-full bg-transparent flex items-center justify-center z-[3]">
        <Image src={ellipse} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-transparent flex items-center justify-center z-[3]">
        <Image src={ellipse1} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg--transparent flex items-center justify-center z-[4]">
        <Image src={ellipse2} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]">
        <Image src={ellipse3} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]">
        <Image src={ellipse4} alt="" className="" />
      </div>
      <div className=" absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]">
        <Image src={ellipse5} alt="" className="" />
      </div>

      <div className=" z-[10] max-h-[452px] w-[378px] bg-white dark:bg-black rounded-3xl p-[30px] flex flex-col items-center justify-start">
        <Image src={loginLogo} alt="" className=" mb-[20px]" />
        <h1 className=" font-bold text-[20px] mb-[20px] dark:text-white">
          Welcome To Agent X
        </h1>

        <div className=" w-[95%] mb-[20px]">
          <label className=" text-[#0000008C] dark:text-[#FFFFFF8C] text-[13px] mb-3">
            Enter OTP
          </label>
          <div className=" flex items-center justify-center border border-[#0000001A] dark:border-[#FFFFFF1A] rounded-xl w-full p-[5px]">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full bg-transparent dark:text-white focus:outline-none px-2"
              placeholder="Enter OTP"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Send OTP again (kept as-is) */}
        <a
          href={"/forgotPassword/otp"}
          className=" font-[14px] text-[#121212] dark:text-[#AB4FA8] mb-[20px] hover:text-[#121212]/60 hover:dark:text-[#AB4FA8]/60 duration-500"
        >
          Send OTP
        </a>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className=" w-full flex items-center justify-center text-white bg-black dark:bg-[#AB4FA8] h-[48px] rounded-2xl"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </div>
  );
};

export default Page;
