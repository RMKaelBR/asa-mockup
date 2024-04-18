import Image from 'next/image';
import OverviewCards from "./2_OverviewCards";

interface OverviewReportProps {
  imageUrl: string;
}

function OverviewReport ({imageUrl}: OverviewReportProps) {
  return (
    <div className="m-4">
      <Image src={imageUrl} width={320} height={450} alt="report" className="rounded-xl" />
      <button className="rounded-full px-8 py-3 bg-orange-500 text-white my-6">VIEW</button>
    </div>
  )
}

export default function OverviewSection () {
  return (
    <div className="flex flex-col items-center">
      <OverviewCards />
      <div className="flex flex-col items-center text-center pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-gray-600 -mt-16 mb-8 lg:mb-20">As of March 31, 2024</h2>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700 mb-4">MANAGEMENT REPORTS</h2>
        <p className="w-7/12 text-gray-500">Explore ASA Philippines{`'`}s Management Report section to stay updated on our latest financial and operational performance, including Annual Reports, Islamic Financing, Monthly Unaudited FS, and Audited Financial Statements.</p>
        <section className="swiper-content flex">
          <button className="text-6xl text-orange-500">&lt;</button>
          <div className="flex m-8">
            <OverviewReport imageUrl="/report1.jpg" />
            <OverviewReport imageUrl="/report2.jpg" />
            <OverviewReport imageUrl="/report3.jpg" />
          </div>
          <button className="text-6xl text-orange-500">&gt;</button>
        </section>
      </div>
    </div>
  )
}