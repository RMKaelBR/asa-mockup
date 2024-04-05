import Image from 'next/image';

interface CommunityCardProps {
  imageUrl: string;
  paragraphContent: string;
}

export default function CommunityCard({ imageUrl, paragraphContent }: CommunityCardProps) {
  return (
    <div className="community-card max-w-full w-auto m-4">
      <Image src={imageUrl} width={250} height={430} alt={paragraphContent} />
      <p>{paragraphContent}</p>
    </div>
  )
}