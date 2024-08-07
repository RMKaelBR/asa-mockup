"use client";
import Image from 'next/image';
import { useState, useEffect, useRef, RefObject } from 'react';
import OverviewCards from "./2_OverviewCards";

const  OverviewReport = ({imageUrl=''}) => {
  return (
    <div className="overview-report flex flex-col items-center m-1 sm:m-4">
      <Image src={imageUrl} width={320} height={450} alt="report" className="rounded-xl" />
      <button className="rounded-full px-4 md:px-8 py-2 md:py-3 bg-orange-500 text-sm md:text-base text-white my-6">VIEW</button>
    </div>
  )
}

const SwiperContent = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        setIsScrollableLeft(container.scrollLeft > 0);
        setIsScrollableRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
        // setIsScrollableRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <section className="w-10/12 xl: w-11/12 2xl:w-3/4">
      <div className="flex items-center">
        <button onClick={() => handleScroll(containerRef, 'left')} 
                disabled={!isScrollableLeft} 
                className={`text-3xl md:text-6xl text-orange-500 ${!isScrollableLeft && 'opacity-30'}`}>
          &lt;</button>
        <div ref={containerRef} className="swiper-content snaps-inline">
          <OverviewReport imageUrl="/report1.jpg" />
          <OverviewReport imageUrl="/report2.jpg" />
          <OverviewReport imageUrl="/report3.jpg" />
          <OverviewReport imageUrl="/report4.jpg" />
          <OverviewReport imageUrl="/report5.jpg" />
        </div>
        <button onClick={() => handleScroll(containerRef, 'right')} 
                disabled={!isScrollableRight} 
                className={`text-3xl md:text-6xl text-orange-500 ${!isScrollableRight && 'opacity-30'}`}>
          &gt;</button>
      </div>
    </section>
  )
}

const handleScroll = (ref: RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
  const container = ref.current;
  if (container) {
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

export default function OverviewSection () {
  return (
    <div className="flex flex-col items-center">
      <OverviewCards />
      <div className="flex flex-col items-center text-center pb-10 lg:pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 -mt-16 mb-8 lg:mb-20">As of March 31, 2024</h2>
        <h2 className="text-2xl md:text-4xl foqqnt-bold text-gray-700 mb-4">MANAGEMENT REPORTS</h2>
        <p className="w-10/12 lg:w-7/12 text-gray-500">Explore ASA Philippines{`'`}s Management Report section to stay updated on our latest financial and operational performance, including Annual Reports, Islamic Financing, Monthly Unaudited FS, and Audited Financial Statements.</p>
        <SwiperContent />
      </div>
    </div>
  )
}