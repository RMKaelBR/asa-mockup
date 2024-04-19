import Image from 'next/image';

function AwardItem({awardName=''}) {
  return (
    <li className="flex items-center border-b border-solid py-2 md:py-4">
      <i className="text-blue-200 text-xl md:text-4xl fa-solid fa-circle-check" />
      <span className="font-bold m-2 md:text-xl">{awardName}</span>
    </li>
  )
}

export default function AwardsSection () {
  return (
    <div className="flex justify-evenly items-center 2xl:w-10/12">
      <div className="w-52 sm:w-80 md:w-max mr-4">
        <h3 className="text-center text-3xl font-extrabold md:text-left">GAWAD MFI 2016</h3>
        <ul className="flex flex-col justify-evenly h-full">
          <AwardItem awardName='OUTSTANDING MICROFINANCE INSTITUTION' />
          <AwardItem awardName='BEST MFI INTERMEDIARY' />
          <AwardItem awardName='BEST MFI AVAILER' />
        </ul>
      </div>
      <Image
        src="/award.jpg"
        width={250}
        height={360}
        alt="An award" 
        className="rounded-2xl drop-shadow w-auto h-4/5 md:h-4/5"/>
    </div>
  )
}