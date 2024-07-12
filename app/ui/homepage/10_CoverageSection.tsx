import Image from 'next/image';
import CoverageData from "./10_CoverageData";

const CoverageMap = () => {
  return (
    <div className="flex lg:flex-col md:w-7/12 lg:w-1/2 items-center lg:px-16">
      <div className="flex flex-wrap lg:flex-nowrap justify-center w-min">
        <CoverageButton location="LUZON I" color="bg-blue-400 hover:bg-blue-600" />
        <CoverageButton location="LUZON II"  color="bg-blue-200  hover:bg-blue-400" />
        <CoverageButton location="VISAYAS" color="bg-yellow-400  hover:bg-yellow-600" />
        <CoverageButton location="MINDANAO" color="bg-orange-400  hover:bg-orange-600" />
      </div>
      <figure className="w-2/3">
        <Image src="/philmap.png" width={488} height={655} alt="Philippine Map" />
      </figure>
    </div>
  )
}

function CoverageButton({ location="", color="" }) {
  const otherStyles = "rounded-full px-4 py-1 mx-2 xl:mx-6 my-2 font-bold text-gray-700 min-w-max"
  const tailwindStyles = `${color} ${otherStyles}`;
  return (
    <button className={tailwindStyles}>{location}</button>
  )
}

export default function CoverageSection() {
  return (
    <div className="w-full xl:w-11/12 flex flex-col lg:flex-row py-16 items-center justify-center">
      <CoverageMap />
      <CoverageData />
    </div>
  )
}