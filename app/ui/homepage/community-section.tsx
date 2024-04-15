// import CommunityCard from "./community-card"; 

import Image from 'next/image';

interface CommunityCardProps {
  imageUrl: string;
  paragraphContent: string;
}

function CommunityCard({ imageUrl, paragraphContent }: CommunityCardProps) {
  return (
    <div className="community-card max-w-full w-auto m-4 relative">
      <Image src={imageUrl} width={430} height={250} alt={paragraphContent} className="rounded-xl"/>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center min-w-full min-h-full ">
        <p className="text-white font-extrabold text-2xl">{paragraphContent}</p>
      </div>
    </div>
  )
}


export default function CommunitySection () {
  return (
    <div className="flex flex-col items-center justify-center w-3/4">
      <h3 className="text-orange-400 font-bold text-2xl">CLIENT COMMUNITY SERVICE PROGRAMS FOR THE POOR</h3>
      <div>
        <div className="flex">
          <CommunityCard imageUrl="/community1.jpg" paragraphContent="ENVIRONMENT" />
          <CommunityCard imageUrl="/community2.jpg" paragraphContent="HEALTH CARE" />
          <CommunityCard imageUrl="/community3.jpg" paragraphContent="HOUSING" />
        </div>
        <div className="flex">
          <CommunityCard imageUrl="/community4.jpg" paragraphContent="EDUCATION" />
          <CommunityCard imageUrl="/community5.jpg" paragraphContent="LIVELIHOOD" />
          <CommunityCard imageUrl="/community6.jpg" paragraphContent="DISASTER RELIEF" />
        </div>
      </div>
    </div>
  )
}