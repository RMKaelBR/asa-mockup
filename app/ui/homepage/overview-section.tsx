import OverviewCards from "./overview-cards";
const apostrophe = `'`
export default function OverviewSection () {
  return (
    <div>
      <OverviewCards />
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-20">As of March 31, 2024</h2>
        <h2 className="text-4xl font-bold text-gray-700 mb-4">MANAGEMENT REPORTS</h2>
        <p className="w-6/12 text-gray-500">Explore ASA Philippines{apostrophe}s Management Report section to stay updated on our latest financial and operational performance, including Annual Reports, Islamic Financing, Monthly Unaudited FS, and Audited Financial Statements.</p>
        <div className="swiper-content flex">
          <button>&lt;</button>
          <div className="mx-4">SWIPER CONTENT HERE</div>
          <button>&gt;</button>
        </div>
      </div>
      
    </div>
  )
}