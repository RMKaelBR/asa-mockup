import Image from 'next/image';

const PresidentPhoto = () => {
  return (
    <figure className="mx-4 mb-8 md:w-4/12 h-auto">
      <Image src="/pres.jpg" width={500} height={700} alt="The President" className="rounded"/>
      <figcaption>
        <h3 className="md:max-lg:text-2xl text-3xl font-extrabold text-gray-700 mt-4 mb-2">
          MD ANDROKLES KOVAČIĆ</h3>
        <h4 className="text-xl font-bold text-gray-700">
          President and CEO February 21, 2023</h4></figcaption>
    </figure>
  )
}

const PresidentMessage = () => {
  return (
    <div className="mx-4 md:w-8/12">
      <div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-700">
          {`PRESIDENT'S MESSAGE`}</h3>
        <p className="text-lg my-4">Dear colleagues,</p>
        <p className="text-lg my-4">In the name of God, the most gracious and the most merciful!</p>
        <p className="text-lg my-4">
          Before I write my message, I thought to send my gratitude to all our heroes, the MFOs, and the rest of the staff giving everything of their hearts, extraordinary dedication, and full-fledged commitment that resulted in an unprecedented performance in our history! ₱5.9 billion in net surplus is unbelievably amazing! Congratulations to everyone including our Board for their never-ending support and prayers. My heartfelt thanks to our clients, as they have given their trust and confidence to this great institution and allowed us to serve them. So, the success of ASA Philippines is the success of the clients. “Nanays, you are truly the owners of this company.”</p>
        <p className="text-lg my-4">
          During the years 2020 and 2021, we struggled to recover our losses. By the end of 2021, ASA Philippines Foundation managed to turn around its financials.</p>
      </div>
      <button className="rounded-full py-3 px-8 bg-blue-400 text-white mt-8">SEE MORE</button>
    </div>
  )
}

export default function PresidentSection () {
  return (
    <div className="w-11/12 flex flex-col md:flex-row md:items-start md:justify-center lg:w-11/12 xl:w-10/12">
      <PresidentPhoto />
      <PresidentMessage />
    </div>
  )
}