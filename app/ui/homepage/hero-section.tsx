import Image from 'next/image';

export default function HeroSection () {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-opacity-50">
      <h1 className="text-5xl text-white text-center mb-4 font-extrabold w-1/2">A FOUNDATION DEDICATED TO BETTER THE LIVES OF THE POOR</h1>
      <p className="text-lg text-white text-center mb-4 w-1/2">ASA Philippines is a non-profit, non-stock corporation specializing in microfinance. The Foundation caters to more than 2 million clients who are called Micro Entrepreneurs.</p>
      <button className="sign-in-button rounded-full py-2 px-10 bg-blue-400 text-white">SIGN IN</button>
    </div>
  )
}