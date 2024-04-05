interface WhatsNewCardProps {
  imgUrl: string;
  heading: string;
  previewContent: string;
}

export default function WhatsNewCard({ imgUrl, heading, previewContent }: WhatsNewCardProps) {
  return (
    <div className="community-card max-w-full w-auto m-4">
      <img src={imgUrl} alt={heading}></img>
      <p>{heading}</p>
      <p>{previewContent}</p>
      <button className="rounded-full py-2 px-4 bg-blue-400">LEARN MORE</button>
    </div>
  )
}