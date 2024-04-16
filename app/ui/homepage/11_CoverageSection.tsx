import Image from 'next/image';
import CoverageData from "./11_CoverageData";

interface CoverageButtonProp {
  location: string;
  color: string;
}

function CoverageButton({ location, color }: CoverageButtonProp) {
  const otherStyles = "rounded-full px-4 py-1 mx-6 font-bold text-gray-700"
  const tailwindStyles = `${color} ${otherStyles}`;
  return (
    <button className={tailwindStyles}>{location}</button>
  )
}

export default function CoverageSection() {
  return (
    <div className="w-10/12 flex py-16 justify-center">
      <div className="flex flex-col items-center px-16">
        <div>
          <CoverageButton location="LUZON I" color="bg-blue-400 hover:bg-blue-600" />
          <CoverageButton location="LUZON II"  color="bg-blue-200  hover:bg-blue-400" />
          <CoverageButton location="VISAYAS" color="bg-yellow-400  hover:bg-yellow-600" />
          <CoverageButton location="MINDANAO" color="bg-orange-400  hover:bg-orange-600" />
        </div>
        <figure>
          <Image src="/philmap.png" width={488} height={655} alt="Philippine Map" />
        </figure>
      </div>
      <div className="flex w-max self-center bg-white shadow-md p-8">
        <CoverageData />
      </div>
    </div>
  )
}