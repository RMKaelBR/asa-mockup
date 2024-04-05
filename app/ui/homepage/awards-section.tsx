import Image from 'next/image';
import Award from '@/public/award.jpg'

export default function AwardsSection () {
  return (
    <div className="flex justify-between w-6/12">
      <div>
        <h3>GAWAD MFI 2016</h3>
        <ul>
          <li><i className="fa-regular fa-circle-check" />OUTSTANDING MICROFINANCE INSTITUTION</li>
          <li><i className="fa-regular fa-circle-check" />BEST MFI INTERMEDIARY</li>
          <li><i className="fa-regular fa-circle-check" />BEST MFI AVAILER</li>
        </ul>
      </div>
      <Image
        src={Award}
        width={250}
        height={360}
        alt="An award" />
    </div>
  )
}