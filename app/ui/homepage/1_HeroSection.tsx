import Link from 'next/link';

export default function HeroSection () {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-opacity-50">
      <div className="hero-background" />
      <div className="text-white flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white text-center mb-4 font-extrabold text-center w-11/12
          sm:text-3xl sm:w-10/12
          md:text-4xl md:w-9/12
          lg:text-4xl lg:w-8/12
          xl:text-5xl xl:w-8/12
          2xl:text-5xl 2xl:w-7/12">
            A FOUNDATION DEDICATED TO BETTER THE LIVES OF THE POOR
        </h1>
        <p className="text-lg text-center mb-4 sm:w-10/12 lg:w-9/12 xl:w-7/12 2xl:w-1/2">
          ASA Philippines is a non-profit, non-stock corporation specializing in microfinance. The Foundation caters to more than 2 million clients who are called Micro Entrepreneurs.</p>
        <Link href="/about/who-we-are"><button className="sign-in-button rounded-full py-2 px-10 bg-blue-400">ABOUT US</button></Link>
      </div>
    </div>
  )
}

// text-red-400 sm:text-orange-400 md:text-yellow-400 lg:text-green-400 xl:text-blue-400 2xl:text-violet-400
// text-red-300 sm:text-orange-300 md:text-yellow-300 lg:text-green-300 xl:text-blue-300 2xl:text-violet-300