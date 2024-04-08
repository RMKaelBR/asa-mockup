import Image from 'next/image';
import CoverageData from "./coverage-data";

interface CoverageButtonProp {
  location: string;
  color: string;
}

function CoverageButton({ location, color }: CoverageButtonProp) {
  const otherStyles = "rounded-full px-4 py-1 mx-6"
  const tailwindStyles = `${color} ${otherStyles}`;
  return (
    <button className={tailwindStyles}>{location}</button>
  )
}

export default function CoverageSection() {
  return (
    <div>
      <div>
        <CoverageButton location="LUZON I" color="bg-blue-400 hover:bg-blue-600" />
        <CoverageButton location="LUZON II"  color="bg-blue-200  hover:bg-blue-400" />
        <CoverageButton location="VISAYAS" color="bg-yellow-400  hover:bg-yellow-600" />
        <CoverageButton location="MINDANAO" color="bg-orange-400  hover:bg-orange-600" />
      </div>
      <div className="flex">
        <figure>
          <Image src="/philmap.png" width={488} height={655} alt="Philippine Map" />
        </figure>
        <div>
          <CoverageData />
        </div>
      </div>
    </div>
  )
}