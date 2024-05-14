// import CommunityCard from "./community-card"; 

import Image from 'next/image';

const CommunityCard = ({imageUrl="", paragraphContent=""}) => {
  return (
    <article className="community-card m-4 relative">
      <Image src={imageUrl} width={430} height={250} alt={paragraphContent} className="rounded-xl"/>
      <div className="absolute top-0 left-0 flex justify-center items-center min-w-full min-h-full">
        <p className="text-white font-extrabold text-2xl">{paragraphContent}</p>
      </div>
      {/* <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-self-end w-maxself-end text-white font-extrabold text-2xl">{paragraphContent}</p> */}
    </article>
  )
}

export default function CommunitySection () {
  return (
    <div className="2xl:w-11/12">
      <h3 className="text-orange-400 text-center font-bold text-2xl">
        CLIENT COMMUNITY SERVICE PROGRAMS FOR THE POOR</h3>
      <div className="flex flex-wrap justify-center">
        <CommunityCard imageUrl="/community1.jpg" paragraphContent="ENVIRONMENT" />
        <CommunityCard imageUrl="/community2.jpg" paragraphContent="HEALTH CARE" /> 
        <CommunityCard imageUrl="/community3.jpg" paragraphContent="HOUSING" />
        <CommunityCard imageUrl="/community4.jpg" paragraphContent="EDUCATION" />
        <CommunityCard imageUrl="/community5.jpg" paragraphContent="LIVELIHOOD" />
        <CommunityCard imageUrl="/community6.jpg" paragraphContent="DISASTER RELIEF" />
      </div>
    </div>
  )
}