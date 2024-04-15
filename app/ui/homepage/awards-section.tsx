import Image from 'next/image';


function Checkmark() {
  return (
    <span className="text-blue-200 text-4xl"><i className="fa-solid fa-circle-check" /></span>
  )
}

export default function AwardsSection () {
  return (
    <div className="flex justify-between w-6/12">
      <div>
        <h3 className="text-3xl font-extrabold">GAWAD MFI 2016</h3>
        <ul className="flex flex-col justify-evenly h-full">
          <li className="border-b border-solid py-4"><Checkmark />
              <span className="font-bold m-2 text-xl">OUTSTANDING MICROFINANCE INSTITUTION</span></li>
          <li className="border-b border-solid py-4"><Checkmark />
              <span className="font-bold m-2 text-xl">BEST MFI INTERMEDIARY</span></li>
          <li className="border-b border-solid py-4"><Checkmark />
              <span className="font-bold m-2 text-xl">BEST MFI AVAILER</span></li>
        </ul>
      </div>
      <Image
        src="/award.jpg"
        width={250}
        height={360}
        alt="An award" 
        className="rounded-2xl drop-shadow"/>
    </div>
  )
}